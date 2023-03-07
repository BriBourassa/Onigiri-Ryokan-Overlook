import './css/styles.css';
import fetchAll from './apiCalls';
import Customer from './classes/Customer-class';
import Booking from './classes/Bookings-class';
import Room from './classes/Rooms-class';

import './images/onigiri.png'
import './images/landscape.png'

const loginBubble = document.querySelector('.hide-bubble')
const mainPage = document.querySelector('.main-page');
const existingBookingsSection = document.getElementById('existingBookingsSection');
const greetingSection = document.getElementById('greeting');

const buttonSearch = document.getElementById('search-btn');
const calendar = document.getElementById('calendar');
const dropdownRoomSelector = document.getElementById('roomTypeSelector');
const buttonSumbmitLogin = document.getElementById('submit-login')

let availableRooms;
let customer;
let bookingData;
let bookings;
let roomData;
let rooms;
let selectedCalendarDate;

buttonSearch.addEventListener('click', searchRoomsByDate)
dropdownRoomSelector.addEventListener('change', searchRoomsByType)
existingBookingsSection.addEventListener('click', function(event) {
    if(event.target.className == 'booking-button'){
        createNewBooking(parseInt(event.target.id));
    }
});

buttonSumbmitLogin.addEventListener('click', validateLogin)
// window.addEventListener('load', fetchStuff)

function fetchStuff(){
fetchAll()
    .then(data => {
    customer = new Customer(data[0])
    console.log('customers id:', customer.username)
    bookingData = data[1].bookings
    bookings =  new Booking(bookingData)
    roomData = data[2].rooms
    rooms = new Room(roomData) 
    viewCustomerDashboard()
    })
};

function show(element) {
    element.classList.remove('hidden');
};
  
function hide(element) {
    element.classList.add('hidden');
};

function login(username, password){

}

function validateLogin(username, password){
    // if password is NOT 'overlook2021',
        // first 8 letters substring are not customer
    // change main innerhtml to error message

    // parseint

    //fetch needs number in advance
    



    // }
    fetchStuff()
    show(mainPage)
    hide(loginBubble)
  
   
// //     if (the input value === "customer50")

};

function viewCustomerDashboard(){
    // show(mainPage)
    existingBookingsSection.innerHTML = ''
    customer.findCustomerBookings(bookingData)
    console.log('this is the dashboard')
    const total = customer.getTotalCost(rooms)
   greetingSection.innerHTML = `
    <h2>Welcome, ${customer.name}!</h2>
    <h3>You have spent ${total}</h3>
    `
    customer.bookings.forEach(booking => {
        existingBookingsSection.innerHTML += `
        <div class="booking">
            <p>Date: ${booking.date}</p>
            <p>Room Number: ${booking.roomNumber}</p>  
        </div>
        `
    }) 
};

function searchRoomsByDate(){
    event.preventDefault()
    selectedCalendarDate = calendar.value.replaceAll('-', '/')
    const bookedRoomNumbers = bookings.getBookedRoomNumbersByDate(selectedCalendarDate)
    availableRooms = rooms.getAvailableRooms(bookedRoomNumbers)
    showAvailableBookings()
};

function searchRoomsByType(){
    const selectedRoomType = dropdownRoomSelector.value
    const transformedSelectedType = selectedRoomType.replace('-', ' ')
    const availableRoomsByType = rooms.getAvailableRoomsByType(transformedSelectedType)
    availableRooms = availableRoomsByType
        console.log('transformed type:', transformedSelectedType)
        showAvailableBookings()
};

function showAvailableBookings(){
    existingBookingsSection.innerHTML = ''
    availableRooms.forEach(room => {
        // console.log(room)
        existingBookingsSection.innerHTML += `
        <div class="booking">
            <p>Room Number: ${room.number}</p>
            <p>Room Type: ${room.roomType}</p>
            <p>Cost Per Night: ${room.costPerNight}<p>
            <button class="booking-button" id="${room.number}">Book this Room</button>  
        </div>
        `
    }) 
};

function createNewBooking(roomNum){
    // console.log('the thing is happening is post')
    const post = fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "userID": customer.id, 
            "date": selectedCalendarDate, 
            "roomNumber": roomNum })
        })
            .then(response => response.json())
            .then(response => {
                fetchStuff() 
            })
   customer.addNewBooking(roomNum)
   return post
};



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
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');

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

buttonSumbmitLogin.addEventListener('click', () => {
    event.preventDefault()
    signIn()
})

function fetchStuff(id){
fetchAll(id)
    .then(data => {
    customer = new Customer(data[0])
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

function signIn(){
    const id = validateInput(username.value, password.value)
    if(id){
      fetchStuff(id)
    }
  };

  function validateInput(username, password){
      if(username.substring(0, 8) !== 'customer'){
          alert('Sorry, incorrect USERNAME! Please try again.')
      //   loginBubble.innerHTML = ''
      //   loginBubble.innerHTML +=  `<div class="displayed-bookings">
      //   <p>Sorry! Incorrect Username<p>`
        return
      }
      if(parseInt(username.substring(8))  > 50 || parseInt(username.substring(8)) < 1){
          alert('USERNAME number must be between 1 and 50! We only have 50 customers here.')
      //   loginBubble.innerHTML = ''
      //   loginBubble.innerHTML +=  `<div class="displayed-bookings">
      //   <p>Sorry! Incorrect Username<p>`
        return
      }
    if(password !== 'overlook2021'){
        alert('Sorry, incorrect PASSWORD! Please try again.')
    //   loginBubble.innerHTML = ''
    //   loginBubble.innerHTML +=  `<div class="displayed-bookings">
    //   <p>Sorry! Incorrect Password<p>`
      return
    }
    return username.substring(8)
  };
  
function viewCustomerDashboard(){
    show(mainPage)
    hide(loginBubble)
    existingBookingsSection.innerHTML = ''
    customer.findCustomerBookings(bookingData)
    const total = customer.getTotalCost(rooms)
    const fixedTotal = total.toFixed(2)
    greetingSection.innerHTML = `
    <h2>Welcome, ${customer.name}!</h2>
    <h3>You have spent ${fixedTotal}</h3>
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
    // availableRooms = rooms.getAvailableRooms(bookedRoomNumbers)
    rooms.getAvailableRooms(bookedRoomNumbers)
    availableRooms = rooms.availableRooms
    showAvailableBookings()
};

function searchRoomsByType(){
    const selectedRoomType = dropdownRoomSelector.value
    const transformedSelectedType = selectedRoomType.replace('-', ' ')
    const availableRoomsByType = rooms.getAvailableRoomsByType(transformedSelectedType)
    availableRooms = availableRoomsByType
    showAvailableBookings()
};

function showAvailableBookings(){
    existingBookingsSection.innerHTML = ''
    availableRooms.forEach(room => {
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
                fetchStuff(customer.id) 
            })
            // customer.addNewBooking(roomNum)
    return post
};



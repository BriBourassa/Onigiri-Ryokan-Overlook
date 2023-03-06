import './css/styles.css';
import fetchAll from './apiCalls';
import Customer from './classes/Customer-class';
import Booking from './classes/Bookings-class';
import Room from './classes/Rooms-class';

import './images/onigiri.png'
import './images/landscape.png'

const existingBookingsSection = document.getElementById('existingBookingsSection')
const greetingSection = document.getElementById('greeting')

const buttonSearch = document.getElementById('search-btn')
const calendar = document.getElementById('calendar')
const dropdownRoomSelector = document.getElementById('roomTypeSelector')


// const buttonNewBooking = document.getElementById(`${room.number}`);
// buttonNewBooking.addEventListener('click', createNewBooking)

let availableRooms;
let greeting;
// let customerData
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
})

window.addEventListener('load', () => {
fetchAll(1)
    .then(data => {
    // customerData = data[0].customers
    customer = new Customer(data[0])
    // console.log('customer:', customer)
    bookingData = data[1].bookings
    bookings =  new Booking(bookingData)
    
        // optional:
        // bookings = bookingData.map(booking => new Booking(bookingData))
        // bookingsRepository = new bookingRepository(bookings)
        // ^^^^^ instantiate each time in refactor

    // console.log('bookings:', bookings)
    // console.log('one customers bookings', bookings.getBookingsByUserId(customer.id))
    roomData = data[2].rooms
    rooms = new Room(roomData) 
    viewCustomerDashboard()
    }) 
});

function viewCustomerDashboard(){
    customer.findCustomerBookings(bookingData)
    // console.log(customer.findCustomerBookings(bookingData))
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
            <button class="booking-button" id="${room.number}">Book this Room</button>  
        </div>
        `
        
        // const buttonNewBooking = document.getElementById(`${room.number}`);
        // console.log(buttonNewBooking)
        // buttonNewBooking.addEventListener('click', createNewBooking)
    }) 

};



function createNewBooking(roomNum){
    // id is the room number
    console.log('the thing is happening')
    // const buttonNewBooking = document.getElementById(`${room.number}`);
//     const doTheBooking = buttonNewBooking.closest('button')
//  console.log(doTheBooking)

//     customer.addNewBooking(room.number)
//     console.log('new booking:', customer.bookings)

// console.log(typeof(roomNum))
    
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
   .then(response => console.log(JSON.stringify(response)))

};


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

let greeting;
// let customerData
let customer;
let bookingData;
let bookings;
let roomData;
let rooms;

buttonSearch.addEventListener('click', searchRoomsByDate)
dropdownRoomSelector.addEventListener('change', searchRoomsByType)

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

function show(element) {
    element.classList.remove('hidden');
};
  
function hide(element) {
    element.classList.add('hidden');
};

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
    const selectedCalendarDate = calendar.value.replaceAll('-', '/')

    const bookedRoomNumbers = bookings.getBookedRoomNumbersByDate(selectedCalendarDate)
    const availableRooms = rooms.getAvailableRooms(bookedRoomNumbers)

    console.log(availableRooms)


    hide(existingBookingsSection)

};



function searchRoomsByType(){
    const selectedRoomType = dropdownRoomSelector.value

    const bookedRoomNumbersByType = bookings.getBookedRoomByType(selectedRoomType)
    const availableRoomsByType = rooms.getAvailableRoomsByType(bookedRoomNumbersByType)

        console.log(availableRoomsByType)

};



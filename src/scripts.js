
import './css/styles.css';
import fetchAll from './apiCalls';
import Customer from './classes/Customer-class';
import Booking from './classes/Booking-class';
import Room from './classes/Room-class';

import './images/onigiri.png'
import './images/landscape.png'


const existingBookingsSection = document.getElementById('existingBookingsSection')
const greetingSection = document.getElementById('greeting')

let greeting;
// let customerData
let customer;
let bookingData;
let bookings;
let roomData;
let rooms;

window.addEventListener('load', () => {
fetchAll(1)
    .then(data => {
    // customerData = data[0].customers
    customer = new Customer(data[0])
    // console.log('customer:', customer)
    bookingData = data[1].bookings
    bookings =  new Booking(bookingData)
    // console.log('bookings:', bookings)
    // console.log('one customers bookings', bookings.getBookingsByUserId(customer.id))
    roomData = data[2].rooms
    rooms = new Room(roomData) 
    viewCustomerDashboard()
    }) 
});

function viewCustomerDashboard(){
   greetingSection.innerHTML = `
    <h2>Welcome, ${customer.name}!</h2>
    <h3>You have spent ${customer.spent}</h3>
    `
};


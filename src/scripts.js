
import './css/styles.css';
import fetchAll from './apiCalls';
import Customer from './classes/Customer-class';
import Booking from './classes/Booking-class';
import Room from './classes/Room-class';


import './images/onigiri.png'
import './images/landscape.png'


const existingBookingsSection = document.getElementById('existingBookingsSection')

let customerData
let customer;
let bookingData;
let bookings;
let roomData;
let rooms;


fetchAll()
    .then(data => {
    customerData = data[0].customers
    customer = customerData.map(datum => new Customer(datum))
    
    console.log('customer:', customer[0])
    //.find()
    // match ids in find() for login?

    bookingData = data[1].bookings
    bookings = bookingData.map(datum => new Booking(datum))
    console.log('bookings:', bookings)

    roomData = data[2].rooms
    rooms = roomData.map(datum => new Room(datum))
    console.log('rooms:', rooms)
});


// assign fetches to customerData etc?



function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};



// showBookings(id){
//     existingBookingsSection.innerHTML = ''
//     let bookings = bookings.filter(booking => {
//         if(customer.id === id){
//             existingBookingsSection.innerHTML = `
//             <p>
//             `
//         }
//     })

    
// };


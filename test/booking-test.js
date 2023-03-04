import chai from 'chai';
import {customers, rooms, bookings} from './test-data';
const expect = chai.expect;
import Booking from '../src/classes/Booking-class';


describe('booking', () => {
    let booking1;
    let booking2;
    
    beforeEach(() => {
        booking1 = new Booking(bookings[0])
        booking2 = new Booking(bookings[1])
    })
})
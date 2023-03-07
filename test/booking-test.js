import chai from 'chai';
import {customers, rooms, bookings} from './test-data';
const expect = chai.expect;
import Bookings from '../src/classes/Bookings-class';

describe('booking', () => {
    let allBookings;
    
    beforeEach(() => {
        allBookings = new Bookings(bookings)
    })

    it('should instantiate our good friend allBookings', () => {
        const expected = bookings[0]
        expect(allBookings.bookings[0]).to.deep.equal(expected)
        expect(allBookings.bookings.length).to.equal(4)
    })

    it('should get booked room numbers by date', () => {
        const bookedRoom = allBookings.getBookedRoomNumbersByDate('2022/04/22')
        expect(bookedRoom).to.deep.equal([2])
    })
});
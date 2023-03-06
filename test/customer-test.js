import chai from 'chai';
import {customers, rooms, bookings} from './test-data';
const expect = chai.expect;
import Customer from '../src/classes/Customer-class';


describe('customer', () => {
    let customer1;
    let customer2;
    
    beforeEach(() => {
        customer1 = new Customer(customers[0])
        customer2 = new Customer(customers[1])
    })

    it('should be a function', () => {
        expect(Customer).to.be.a('function')
    })

    it('should instantiate our good friend customer', () => {
        expect(customer1).to.be.an.instanceOf(Customer)
        expect(customer2).to.be.an.instanceOf(Customer)
    })

    it('should have an id', () => {
        expect(customer1.id).to.equal(1)
        expect(customer2.id).to.equal(2)
    })

    it('should have a name', () => {
        expect(customer1.name).to.equal("Leatha Ullrich")
        expect(customer2.name).to.equal("Rocio Schuster")
    })

    it('should be able to store bookings in bookings array', () => {
        customer1.findCustomerBookings(bookings)
        customer2.findCustomerBookings(bookings)
        expect(customer1.bookings).to.deep.equal([bookings[0], bookings[1]])
        expect(customer2.bookings).to.deep.equal([bookings[2]])
    })
  
    it('should assign correct username to customer instantiation', () => {
        expect(customer1.username).to.equal(1)
    })

});
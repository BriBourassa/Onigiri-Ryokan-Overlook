import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/Customer-class';


describe('customer', () => {
    let customer;
    let allBookings;
    let room;

    beforeEach(() => {
        customer = new Customer(

        )
    })

    it('should be a function', () => {
        expect(Customer).to.be.a('function')
    })


    it('should add booking data to allBookings array', () => {
        expect(this.allBookings.length).to.be.greaterThan(0)
    })
    //value greater than 0, yay!



});
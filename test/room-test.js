import chai from 'chai';
import {customers, rooms, bookings} from './test-data';
const expect = chai.expect;
import Room from '../src/classes/Room-class';


describe('room', () => {
    let room1;
    let room2;
    
    beforeEach(() => {
        room1 = new Room(rooms[0])
        room2 = new Room(rooms[1])
    })
})
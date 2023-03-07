import chai from 'chai';
import {customers, rooms, bookings} from './test-data';
const expect = chai.expect;
import Rooms from '../src/classes/Rooms-class';

describe('room', () => {
    let rooms1;
    
    beforeEach(() => {
        rooms1 = new Rooms(rooms)
    })

    it('should instantiate our good friend room', () => {
        expect(rooms1).to.be.an.instanceOf(Rooms)
    })

    it('should be able to get available rooms', () => {
        rooms1.getAvailableRooms([24,2])
        expect(rooms1.availableRooms[0]).to.deep.equal(rooms[2])
    })

    it('should get available rooms by type', () => {
        rooms1.getAvailableRooms([24,2])
        const availableRoomType = rooms1.getAvailableRoomsByType("suite")
        expect(availableRoomType).to.deep.equal([rooms[2]])
    })
});
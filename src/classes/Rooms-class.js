class Rooms{
    constructor(roomArr){
        this.rooms = roomArr
    }
    getAvailableRooms(bookedRoomNumbers){
        return this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
    }
};

export default Rooms
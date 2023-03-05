class Rooms{
    constructor(roomArr){
        this.rooms = roomArr
        this.availableRooms = []
    }
    getAvailableRooms(bookedRoomNumbers){
        return this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
    }

    getAvailableRoomsByType(bookedRoomNumbers){
        return this.rooms.filter(room => !bookedRoomNumbers.includes(room.roomType))
    }
};

export default Rooms
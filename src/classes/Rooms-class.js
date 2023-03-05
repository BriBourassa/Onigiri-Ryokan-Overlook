class Rooms{
    constructor(roomArr){
        this.rooms = roomArr
        // this.availableRooms = []
    }
    getAvailableRooms(bookedRoomNumbers){
         return this.availableRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number))
    }

    getAvailableRoomsByType(bookedRoomType){
        if(bookedRoomType === 'all rooms'){
            return this.availableRooms
        }
        return this.availableRooms.filter(room => bookedRoomType === room.roomType)
    }
};

export default Rooms
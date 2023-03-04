class Room{
    constructor(roomObj){
        this.number = roomObj.number,
        this.roomType = roomObj.roomType,
        this.bidet = null,
        this.bedSize = roomObj.bedSize,
        this.numBeds = roomObj.numBeds,
        this.costPerNight = 0
    }
    
};

export default Room
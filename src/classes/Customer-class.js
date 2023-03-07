class Customer{
    constructor(customerObj){
        this.id = customerObj.id,
        this.name = customerObj.name,
        this.bookings = []
    }
    findCustomerBookings(bookingData){
        this.bookings = bookingData.filter(booking => booking.userID === this.id)
    }
    getTotalCost(rooms){
        return this.bookings.reduce((acc, booking) => {
            rooms.rooms.forEach(room => {
            if(booking.roomNumber === room.number) {
                acc += room.costPerNight
            }
            })
            return acc
        },0) 
    }
    addNewBooking(booking){
        this.bookings.push(booking)
    }
};

export default Customer
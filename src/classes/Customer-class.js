class Customer{
    constructor(customerObj){
        this.id = customerObj.id,
        this.name = customerObj.name,
        this.username = this.makeUsername()
        this.password = 'overlook2021'
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
    addNewBooking(bookingId){
        this.bookings.push(bookingId)
    }
    makeUsername(){
        return `customer${this.id}`
        // this will work but not great idea ***
    }
};

export default Customer
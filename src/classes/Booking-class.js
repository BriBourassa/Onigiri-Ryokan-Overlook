class Booking{
    constructor(bookingsArr){
        this.bookings = bookingsArr
    }
    
    getBookingsByUserId(id){
        return this.bookings.filter(booking => booking.userID === id)
    }



};

export default Booking
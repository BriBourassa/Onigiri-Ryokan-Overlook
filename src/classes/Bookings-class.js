class Bookings{
    constructor(bookingsArr){
        this.bookings = bookingsArr
    }
    
    // getBookingsByUserId(id){
    //     return this.bookings.filter(booking => booking.userID === id)
    // }

    // getAvailableRoomsByDate(date){
    //     return this.bookings.filter(booking => booking.date !== date)
    // }

    getBookedRoomNumbersByDate(date){
        const listOfReservations = this.bookings.filter(booking => booking.date === date)
        return listOfReservations.map(booking => booking.roomNumber)
    }

    getBookedRoomByType(type){
        const listOfReservations = this.bookings.filter(booking => booking.roomType === type)
        return listOfReservations.map(booking => booking.roomType)
    
    }
};

export default Bookings
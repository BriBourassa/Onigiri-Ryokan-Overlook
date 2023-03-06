class Bookings{
    constructor(bookingsArr){
        this.bookings = bookingsArr
    }
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
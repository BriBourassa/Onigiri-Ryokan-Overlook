class Bookings{
    constructor(bookingsArr){
        this.bookings = bookingsArr
    }
    getBookedRoomNumbersByDate(date){
        const listOfReservations = this.bookings.filter(booking => booking.date === date)
        return listOfReservations.map(booking => booking.roomNumber)
    }
};

export default Bookings
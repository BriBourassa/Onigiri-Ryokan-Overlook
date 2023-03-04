class Booking{
    constructor(bookingObj){
        this.id = bookingObj.id,
        this.userID = bookingObj.userID,
        this.date = bookingObj.date,
        this.roomNumber = bookingObj.roomNumber
    }
    
    checkForBooking(customerData, bookingData){
        const customerRoom = bookingData.filter(booking => {
            return booking.userID === customerData.id
        })
    }



};

export default Booking
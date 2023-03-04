class Customer{
    constructor(customerObj){
        this.id = customerObj.id,
        this.name = customerObj.name,
        this.bookings = [],
        this.spent = 0
    }

    findCustomerBookings(bookingData){
        return this.bookings = bookingData.filter(booking => booking.userID === this.id)
    }

    getTotalCost(){
        // reduce() add to acc to this.bookings?
    }

    createNewBooking(booking){
        this.bookings.push(booking)
    }

};

export default Customer
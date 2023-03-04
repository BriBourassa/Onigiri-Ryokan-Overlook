class Customer{
    constructor(customerObj){
        this.id = customerObj.id,
        this.name = customerObj.name,
        this.pastBookings = [],
        this.currentBookings = [],
        this.allBookings = [],
        this.spent = 0
    }

    findCustomerBookings(bookingData){
        return this.allBookings = bookingData.filter(booking => booking.userID === this.id)
    }

    getTotalCost(){
        // reduce() add to acc to this.allBookings?
    }

    createNewBooking(booking){
        this.bookings.push(booking)
    }

};

export default Customer
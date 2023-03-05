
const customers = [
    {
        id: 1,
        name: "Leatha Ullrich"
    },
    {
        id: 2,
        name: "Rocio Schuster"
    },
]

const rooms = [
    {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4
    },
    {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
    },
]

const bookings = [
    {
        id: "5fwrgu4i7k55hl6sz",
        userID: 1,
        date: "2022/04/22",
        roomNumber: 2
    },
    {
        id: "5fwrgu4i7k55hl6t5",
        userID: 1,
        date: "2022/01/24",
        roomNumber: 24
    },
    {
        id: "5fwrgu4i7k55hl6t6",
        userID: 2,
        date: "2022/01/10",
        roomNumber: 12
    },
    {
        id: "5fwrgu4i7k55hl6t7",
        userID: 20,
        date: "2022/02/16",
        roomNumber: 7
    }
]

export{customers, rooms, bookings}
class Reservation {
    constructor(guets, room, days) {
        this.guets = guets
        this.room = room
        this.days = days
        this.total = days * Reservation.basefee
    }

    static basefee = 150

    static showbasefeee(){
        console.log(`Base fee is R$ ${Reservation.basefee},00`)
    }
}

Reservation.showbasefeee()

const R1 = new  Reservation(3, 201, 5)

console.log(R1)
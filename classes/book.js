class book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}



const eragon = new book("Eragon")
const eldest = new book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)
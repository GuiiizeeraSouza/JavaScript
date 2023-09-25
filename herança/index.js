class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property {}

const land = new Property(200, 50.000)
const someHouse = new House(120, 200.000)

console.log(someHouse)
console.log(land)
console.log(someHouse instanceof Property)
class Vehicle {
    move() {
        console.log("O veiculo está se omvendo")
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo.")
    }
}

class Ship extends Vehicle {
    move() {
        console.log("O navio está se movendo.")
    }
}
class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave esta se movendo a ${speed} Km/h.`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

//delorean.move()
//blackPearl.move()
//epoch.move(80)

function start(Vehicle) {
    console.log("Iniciando um veiculo.")
    Vehicle.move(80)
}

start(blackPearl)
start(delorean)
start(epoch)
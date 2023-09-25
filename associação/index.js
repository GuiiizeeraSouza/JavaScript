const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Dos Andradas", 1587, "Centro", "Santa Maria", "RS")
const John = new  Person("John Doe", addr)

console.log(John)
console.log(John.address.fullAddress())
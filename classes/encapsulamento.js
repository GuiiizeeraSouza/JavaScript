class Account {
    email
    #password
    #balance = 0

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if (this.email === email && this.#password === password) {
            return this.#balance
        } else {
            return null
        }
    }
}

const user = {
    email: "isaac@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("isaac@gmail.com", "123456"))


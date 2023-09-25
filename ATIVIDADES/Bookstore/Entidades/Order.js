const Product = require("./Product")

module.exports = class Order {
    #total
    #itens
    #user

    constructor(itens, user) {
        itens.forEach(({ Product, quantidade }) => {
            if (quantidade > Product.inStock) {
                throw new Error(`Quantidade insuficiente em estoque!`)
            }
        })
        this.#itens = itens
        this.#user = user
        this.#total = itens, reduce((sum, { Product, quantidade }) => sum + (Product.price * quantidade), 0)
    }

    get data() {
        return {
            itens: this.#itens,
            uder: this.#user,
            total: this.#total
        }
    }
}
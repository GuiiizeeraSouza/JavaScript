const Product = require("./Product");

module.exports = class Poster extends Product {
    constructor(nome, descricao, height, width, preco, inStock = 0) {
        super(nome, descricao, preco, inStock)
        this.height
        this.width
    }
}
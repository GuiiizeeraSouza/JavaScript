const Product = require("./Product")

module.exports = class Book extends Product {
    constructor(titulo, sinopse, genero, paginas, author, descricao, preco, inStock = 0){
        super(`Livro: ${titulo}`, descricao, preco, inStock)
        this.titulo = titulo
        this.genero = genero
        this.paginas = paginas
        this.author = author
    } 
}
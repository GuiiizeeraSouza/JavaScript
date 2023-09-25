module.exports = class Product {
    constructor(nome, descricao, preco, inStock = 0){
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.inStock = inStock
    }

    addToStock(quantidade) {
        this.inStock += quantidade

    }

    removeFromStock(quantidade) {
        this.inStock -= quantidade
    }
}
const DataBase = require("./DataBase")
const Book = require("./Entidades/Book")
const Order = require("./Entidades/Order")
const Poster = require("./Entidades/Posters")
const User = require("./Entidades/User")
const Author = require("./Entidades/Author")

module.exports = class App {
    static #database = new DataBase()

    createUser(nome, email, senha) {
        const user = new User(nome, email, senha)
        App.#database.saveUser(user)
    }

    getUsers() {
       return App.#database.find(`users`)
    }

    createAuthors( nome, nacionalidade, bio) {
        const author = new Author (nome, nacionalidade, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find(`authors`)
    }

    createBook(title, sinopse, genero, paginas, author, descricao, preco, inStock) {
        const book = new Book(title, sinopse, genero, paginas, author, descricao, preco, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
        return App.#database.find(`books`)
    }

    addBook(bookName, quantidade) {
        App.#database.addBooksToStock(bookName, quantidade)
    }



    createPoster(nome, descricao, height, width, preco, inStock) {
        const poster = new Poster(nome, descricao, height, width, preco, inStock )
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantidade) {
        App.#database.addPostersToStock(posterName, quantidade)
    }   

    createOrder(itens, user) {
        const order = new Order(itens, user)
        App.#database.saveOrder(order)
        order.data.itens.forEach(({ product, quantidade}) => {
            if(product instanceof Book) {
                App.#database.removeBookToStock(product.nome, quantidade)
            }else if (product instanceof Poster){
                App.#database.removePosterToStock(product.name, quantidade)
            }
        })
    }

    getOrders() {
        return App.#database.find(`orders`)
    }

    showDataBase() {
       return App.#database.showStorage()
    }
}

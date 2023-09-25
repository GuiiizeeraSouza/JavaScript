function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
}

const author = {name: "Cristopher"}
const tags = ["fantasy", "Adventure"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)
class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login bem sucedido!");
        } else {
            console.log("Login falhou. Verifique seu email e senha.");
        }
    }
}

class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        if (quantity > 0) {
            this.inStock += quantity;
        } else {
            console.log('A quantidade deve ser maior que zero para adicionar ao estoque.')
        }
    }
    calculateDiscount(discountPercentage) {
        if (discountPercentage >= 0 && discountPercentage <= 100) {
            const discountAmount = (discountPercentage / 100) * this.price;
            const discountedPrice = this.price - discountAmount;
            return discountedPrice;
        } else {
            console.log('A percentagem de desconto deve estar entre 0 e 100.');
            return this.price;
        }
    }
}

const produto1 = new Product('Camiseta', 'Camiseta de algodão', 25.99);
console.log(produto1); // Exibe os atributos iniciais do produto

produto1.addToStock(10); // Adiciona 10 unidades ao estoque
console.log(produto1); // Exibe o produto após a adição ao estoque


const desconto = 10; // 10% de desconto
const precoComDesconto = produto1.calculateDiscount(desconto);
console.log(`Preço com ${desconto}% de desconto: R$ ${precoComDesconto.toFixed(2)}`);
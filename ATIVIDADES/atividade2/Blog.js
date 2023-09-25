/*
Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.

Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também
devem ter um método específico para adição de comentários nelas.

Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post.

Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de posts,
que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado. */

const Author = require("./Author");

const Post = require("./Post");

const Comment = require(".Comment");


const author1 = new Author("Guilherme");
const author2 = new Author("Lais");

const post1 = author1.createPost("Guilherme é lindo", "sou lindo");
const post2 = author2.createPost("Lai é feia", "sou feia");

const comment1 = new Comment("Metiraaaaaaa", author1);
const comment2 = new Comment("Verdadeeee", author2);
const comment3 = new Comment("Te amo", author1);

post1.addComment(comment1);
post1.addComment(comment2);
post2.addComment(comment3);

console.log("Posts do Autor 1:", author1.posts);
console.log("Posts do Autor 2:", author2.posts);

console.log("Comentários no Post 1:", post1.comments);
console.log("Comentários no Post 2:", post2.comments);
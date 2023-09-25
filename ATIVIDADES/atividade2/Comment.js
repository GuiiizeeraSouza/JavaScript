const Post = require("./Post");
const Author = require("./Author");
class Comment {
    constructor(text, post) {
        this.text = text;
        this.post = post;
    }
}

module.exports = Comment;

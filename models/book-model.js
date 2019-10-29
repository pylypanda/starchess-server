const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true},
    author: { type: String, required: true },
    overview: { type: String, required: true }
})

module.exports = mongoose.model('book', Book);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Champion = new Schema({
    number: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: String, required: true }
})

module.exports = mongoose.model('world-champion', Champion);

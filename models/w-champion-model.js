const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Champion = new Schema({
    name: { type: String, required: true },
    years: { type: String, required: true },
    country: { type: String, required: true }
})

module.exports = mongoose.model('world-w-champion', Champion);

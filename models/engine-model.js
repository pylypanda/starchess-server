const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Engine = new Schema({
    rank: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
})

module.exports = mongoose.model('engine', Engine);

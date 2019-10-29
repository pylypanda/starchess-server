const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Leader = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: String, required: true }
})

module.exports = mongoose.model('previous-leading-player', Leader);

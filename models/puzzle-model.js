const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Puzzle = new Schema({
    type: { type: String, required: true },
    start: { type: String, required: true },
    solve: { type: Array, required: true }
})

module.exports = mongoose.model('puzzle', Puzzle);

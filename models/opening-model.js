const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Opening = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        moves: { type: Array, required: true },
        fens: { type: Array, required: true }
    }
)

module.exports = mongoose.model('opening', Opening);

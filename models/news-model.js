const mongoose = require('mongoose')
const Schema = mongoose.Schema

const News = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('news', News)

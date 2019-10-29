const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Top = new Schema({
    rank: { type: String, required: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    rating: { type: String, required: true },
    byear: { type: String, required: true }
})

Standart = mongoose.model('top-standart-player', Top);
WomenStandart = mongoose.model('top-standart-w-player', Top);
Rapid = mongoose.model('top-rapid-player', Top);
WomenRapid = mongoose.model('top-rapid-w-player', Top);
Blitz = mongoose.model('top-blitz-player', Top);
WomenBlitz = mongoose.model('top-blitz-w-player', Top);

module.exports = {
    Standart,
    WomenStandart,
    Rapid,
    WomenRapid,
    Blitz,
    WomenBlitz
}

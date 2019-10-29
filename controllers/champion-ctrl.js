const Champion = require('../models/champion-model');

getChampions = async (req, res) => {
    await Champion.find({}, (err, champions) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!champions.length) {
            return res
                .status(404)
                .json({ success: false, error: `World champions not found` })
        }
        return res.status(200).json({ success: true, data: champions })
    }).catch(err => console.log(err))
}

module.exports = { getChampions };

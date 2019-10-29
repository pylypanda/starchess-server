const Leader = require('../models/old-leader-model');

getOldLeaders = async (req, res) => {
    await Leader.find({}, (err, leaders) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!leaders.length) {
            return res
                .status(404)
                .json({ success: false, error: `Old leaders not found` })
        }
        return res.status(200).json({ success: true, data: leaders })
    }).catch(err => console.log(err))
}

module.exports = { getOldLeaders };

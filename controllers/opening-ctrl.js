const Opening = require('../models/opening-model');

getOpeningByName = async (req, res) => {
    await Opening.findOne({ name: req.params.name }, (err, opening) => {
        console.log('GetOpeningByName:');        
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!opening) {
            return res
                .status(404)
                .json({ success: false, error: `Opening not found` })
        }
        return res.status(200).json({ success: true, data: opening })
    }).catch(err => console.log(err))
}

getOpeningsByType = async (req, res) => {
    await Opening.find({ type: req.params.opType }, (err, openings) => {
        console.log('getOpeningsByType:');        
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!openings) {
            return res
                .status(404)
                .json({ success: false, error: `Openings not found` })
        }
        return res.status(200).json({success: true, data: openings })
    }).sort({ name: 1 }).catch(err => console.log(err))
}

module.exports = { getOpeningByName, getOpeningsByType };

const Top = require('../models/top-model')
const TopStandart = Top.Standart;
const TopWomenStandart = Top.WomenStandart;
const TopRapid = Top.Rapid;
const TopWomenRapid = Top.WomenRapid;
const TopBlitz = Top.Blitz;
const TopWomenBlitz = Top.WomenBlitz;

getTopStandartPlayers = async (req, res) => {
    await TopStandart.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

getTopStandartWomPlayers = async (req, res) => {
    await TopWomenStandart.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

getTopRapidPlayers = async (req, res) => {
    await TopRapid.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

getTopRapidWomPlayers = async (req, res) => {
    await TopWomenRapid.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

getTopBlitzPlayers = async (req, res) => {
    await TopBlitz.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

getTopBlitzWomPlayers = async (req, res) => {
    await TopWomenBlitz.find({}, (err, top) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!top.length) {
            return res
                .status(404)
                .json({ success: false, error: `Top-100 not found` })
        }
        return res.status(200).json({ success: true, data: top })
    }).catch(err => console.log(err))
}

module.exports = {
    getTopStandartPlayers,
    getTopStandartWomPlayers,
    getTopRapidPlayers,
    getTopRapidWomPlayers,
    getTopBlitzPlayers,
    getTopBlitzWomPlayers
}

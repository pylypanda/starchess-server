const News = require('../models/news-model')

getNewsById = async (req, res) => {
    await News.findOne({ _id: req.params.id }, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!news) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

getSomeNews = async (req, res) => {
    await News.find({}, (err, news) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if(!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).limit(parseInt(req.params.quantity)).catch(err => console.log(err))
}

getNews = async (req, res) => {
    await News.find({}, (err, news) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!news.length) {
            return res
                .status(404)
                .json({ success: false, error: `News not found` })
        }
        return res.status(200).json({ success: true, data: news })
    }).catch(err => console.log(err))
}

module.exports = {
    getNews,
    getSomeNews,
    getNewsById
}

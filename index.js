const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const db = require('./db')
const Router = require('./routes/router')

const app = express()
const apiPort = 3000

app.use(express.static(path.join(__dirname, 'build')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', Router)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

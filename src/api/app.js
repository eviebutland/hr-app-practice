const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const winston = require('winston')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost:27017/hr-mentor-app', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => {
        app.use(cors())
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

        console.log('database is connected')
        app.use('/api', require('./router'))
    })
    .catch((error) => {
        console.log(error, 'Unable to connect to database')
    })
// needed when error 'server.listen is not a function'
module.exports = app
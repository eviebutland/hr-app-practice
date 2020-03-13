const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const winston = require('winston')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// database connection here
app.use('/api', require('./router/router'))
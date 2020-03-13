const express = require('express')

const Router = express.Router
const router = new Router()

router.use('/', () => {
    console.log('made it to the routers page')
})
router.use('/mentors', require('../controllers/mentor'))
const express = require('express')
const Router = express.Router
const router = new Router()

router.use((req, res, next) => {
    console.log('made it to the routers page')
    next()
})
router.use('/mentors', require('./controllers/mentor'))

module.exports = router
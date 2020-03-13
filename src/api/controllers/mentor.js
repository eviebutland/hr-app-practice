const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router
const mentorRouter = new Router()

const mentorSchema = require('../schema/mentor')
const mentor = mongoose.model('mentors', mentorSchema)

mentorRouter.use('/', (res, req, next) => {
    console.log('Made it to controller')
    next()
})

// Get all mentors
mentorRouter.get('/mentors', async (req, res, next) => {
    try {
        const returnedMentors = await mentor.find().sort('name')
        res.send(returnedMentors)

    } catch (error){
        res.status(400).json({
            message: 'Unable to find Mentors'
        })
    }
})

// Get one 
mentorRouter.get('/mentors:id', async (req, res, next) => {
    try {
        const returnedMentor = await mentor.findById(req.params.id)
        res.send(returnedMentor)

    } catch (error){
        res.status(400).json({
            message: 'Unable to find Mentor'
        })
    }
})
// Update 

// Delete
// Create
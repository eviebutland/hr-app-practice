const mongoose = require('mongoose')

const mentor = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 144
    },
    contactDetails: {
        emailAddress: {
            type: String,
            required: true,
            validate: {
                validator: () => {
                    return 
                }, 
                message: 'Please input an email address'
            }
        },
        telephone: {
            type: Number,
            required: true
        },
        extentionNumber: {
            type: Number,
            required: false
        }
    },
    avaliablilty: {
        type: String,
        required: false
    },
    skill: {
        type: String,
        enum: ['Professional', 'Interview Skills', 'Communication'],
        required: true
    }
})

module.exports = mentor
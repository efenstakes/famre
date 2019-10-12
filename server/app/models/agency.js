// include external libraries
const Mongoose = require('mongoose')


const AgencySchema = Mongoose.Schema({

    city: String,
    locality: String,            // ex a place in the city
    phone: String,
    email: String,
    
    description: {
        type: String
    },

    added_on: {
        type: Date, default: Date.now()
    }

})

// hash the password before saving a record
AgencySchema.pre('save', function(next) {
    next()
})


const Agency = Mongoose.model('Agency', AgencySchema)

module.exports = Agency
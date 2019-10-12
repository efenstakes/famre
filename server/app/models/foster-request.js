// include external libraries
const Mongoose = require('mongoose')
const Bcrypt = require('bcrypt')


const RequestSchema = Mongoose.Schema({

    family: {
        city: String,
        locality: String,            // ex a place in the city
        number_of_parents: Number,
        age: Number,
        work: String,
        id: Number,                  // national id
        phone: String,
        email: String
    },

    ref: {                            // what the families will auth by
        type: String, 
        required: true
    },
    
    age_range: {
        type: String
    },

    accepted: {
        status: { type: Boolean, default: false },
        date: { type: Date }
    },

    made_on: {
        type: Date, default: Date.now()
    }

})

// hash the password before saving a record
RequestSchema.pre('save', function(next) {
    next()
})


const FosterRequest = Mongoose.model('FosterRequest', RequestSchema)

module.exports = FosterRequest
// include external libraries
const Mongoose = require('mongoose')
const Bcrypt = require('bcrypt')


const StaffSchema = Mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    priviledge: {
        type: String,
        // values: ['SUPER_ADMIN', 'ADMIN', 'STAFF'],
        enum: ['SUPER_ADMIN', 'ADMIN', 'STAFF'],
        default: 'STAFF'
    },

    email: {
        type: String,
        required: true,
        unique: true,
        // validate: (mail) => {
        //     return Validator.isEmail(mail)
        // }
    },

    is_active: {
        type: Boolean,
        default: true
    }

})

// hash the password before saving a record
StaffSchema.pre('save', function(next) {
    this.password = Bcrypt.hashSync(this.password, 10)
    next()
})


const Staff = Mongoose.model('Staff', StaffSchema)

module.exports = Staff
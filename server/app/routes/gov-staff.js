// include external libraries
const Router = require('express').Router()
const passport = require('passport')

// include external libraries
const StaffController = require('../controllers/gov-staff')


// add 
Router.post('/', StaffController.add)


// block
Router.put('/:id/block', passport.authenticate('staff-jwt', { session: false }), StaffController.block)


// unblock
Router.put('/', passport.authenticate('staff-jwt', { session: false }), StaffController.unblock)


// login
Router.post('/login', StaffController.login)


module.exports = Router
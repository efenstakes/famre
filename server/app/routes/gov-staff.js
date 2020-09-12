// include external libraries
const Router = require('express').Router()
const passport = require('passport')

// include external libraries
const StaffController = require('../controllers/gov-staff')


// add 
Router.post('/',
            // passport.authenticate('staff-jwt', { session: false }),  
            StaffController.add)


// block
Router.put('/:id/block', 
            passport.authenticate('staff-jwt', { session: false }), StaffController.block)


// unblock
Router.put('/', 
           passport.authenticate('staff-jwt', { session: false }), StaffController.unblock)


// login
Router.post('/login', 
            passport.authenticate('staff-local', { session: false }), StaffController.login)

// jwt test
Router.post('/jwt', 
            passport.authenticate('staff-local', { session: false }), 
            (req, res)=> {

                res.json(req.user)

})


module.exports = Router
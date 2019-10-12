// include external libraries
const Router = require('express').Router()
const passport = require('passport')


// include external libraries
const AgencyController = require('../controllers/agency')


// add
Router.post('/', passport.authenticate('staff-jwt', { session: false }), AgencyController.add)


// delete 
Router.delete('/:id', passport.authenticate('staff-jwt', { session: false }), AgencyController.delete)


// get requests
Router.get('/:id/requests', passport.authenticate('staff-jwt', { session: false }), AgencyController.requests)

// get all agencies
Router.delete('/', AgencyController.all)

// add staff
Router.put('/:id/add-staff', passport.authenticate('staff-jwt', { session: false }), AgencyController.add_staff)


// remove staff
Router.put('/:id/remove-staff', passport.authenticate('staff-jwt', { session: false }), AgencyController.remove_staff)



module.exports = Router

// include external libraries
const Router = require('express').Router()
const passport = require('passport')

// include external libraries
const FosterController = require('../controllers/foster-request')


// add 
Router.post('/', FosterController.add)

// details 
Router.get('/:code', FosterController.details)

// delete 
Router.delete('/:id', passport.authenticate('staff-jwt', { session: false }),  FosterController.delete)


// accept
Router.put('/:id/accept', passport.authenticate('staff-jwt', { session: false }),  FosterController.accept)


// deny
Router.put('/:id/deny', passport.authenticate('staff-jwt', { session: false }),  FosterController.deny)

// get request details for family
Router.get('/:ref/:id/family',  FosterController.for_family)

// all 
Router.get('/', FosterController.all)



module.exports = Router
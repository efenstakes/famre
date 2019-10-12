// include external libraries
const Router = require('express').Router()
const passport = require('passport')

// include external libraries
const AgencyController = require('../controllers/agency')


// add
Router.post('/', AgencyController.add)


// delete 
Router.delete('/:id', AgencyController.delete)


// get requests
Router.delete('/:id', AgencyController.all)


module.exports = Router

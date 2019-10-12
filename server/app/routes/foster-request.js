// include external libraries
const Router = require('express').Router()
const passport = require('passport')

// include external libraries
const FosterController = require('../controllers/foster-request')


// add 
Router.post('/', FosterController.add)


// delete 
Router.delete('/:id', FosterController.delete)


// accept
Router.put('/:id/accept', FosterController.accept)


// deny
Router.put('/:id/deny', FosterController.deny)



module.exports = Router
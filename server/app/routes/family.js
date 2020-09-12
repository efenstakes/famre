// include external libraries
const Router = require('express').Router()
const passport = require('passport')


// include external libraries



Router.post('login',  async (req, res)=> {
    let response =  { token: null }

    // create the user token data
    let token_data = { id: req.user.ref, timestamp: Date.now() }
    let token = Jwt.sign({ data: token_data }, process.env.JWT_SECRET)

    // set the token and user data to be returned in response
    response.token = token


    res.json(response)
})


module.exports = Router
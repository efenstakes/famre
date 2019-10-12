// include external libraries
const Express = require('express')
const BodyParser = require('body-parser')
const DotEnv = require('dotenv')
const Cors = require('cors')
const Morgan = require('morgan')

// include internal libraries

// routes



// get environment vars from .env
DotEnv.config()
const PORT = process.env.PORT || 44556


// get database connection 


// initialize express apllication instance
const app = Express()

// log request info
app.use(Morgan('dev'))


// setup server to allow cor's
app.use(Cors())

// setup body parser to help acess json and urlencoded data from
// client applications
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))


// setup passport


// include passport middleware



// hook up routes with the app instance



app.get('/api/tester', (req, res)=> {
	res.json({ working: 'oh yes' })
})


// start application
app.listen(PORT, '0.0.0.0', () => {
    console.log(`server started at port ${PORT}`)
})
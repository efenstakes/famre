// include external libraries


// include external libraries
const Models = require('../models')


// add 
exports.add = async (req, res)=> {
    let response =  { saved: false, id: null, errors: [] }

    let { name, email, password, priviledge } =  req.body

    let staff = await Models.Staff({ name, email, password, priviledge }).save()
    if( !staff || !staff._id ) return res.json(response)

    response.saved = true 
    response.id = staff._id

    res.json(response)
}

// block
exports.block = async (req, res)=> {
    let response =  { blocked: false, errors: [] }

    let staff_id = req.params

    let staff = await Models.Staff.findByIdAndUpdate(staff_id, { is_active: false })
    if( !staff || !staff._id ) return res.json(response)

    response.blocked = true 

    res.json(response)
}

// unblock
exports.unblock = async (req, res)=> {
    let response =  { unblocked: false, errors: [] }

    let staff_id = req.params

    let staff = await Models.Staff.findByIdAndUpdate(staff_id, { is_active: true })
    if( !staff || !staff._id ) return res.json(response)

    response.unblocked = true 

    res.json(response)
}

// login
exports.login = async (req, res)=> {
    let response =  { token: null, user: null }

    // create the user token data
    let token_data = { id: req.user._id, timestamp: Date.now() }
    let token = Jwt.sign({ data: token_data }, process.env.JWT_SECRET)

    // set the token and user data to be returned in response
    response.token = token
    response.user = req.user


    res.json(response)
}


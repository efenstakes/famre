// add 
exports.add = (req, res)=> {
    let response =  { saved: false, id: null, errors: [] }


    res.json(response)
}

// block
exports.block = (req, res)=> {
    let response =  { blocked: false, errors: [] }


    res.json(response)
}

// unblock
exports.unblock = (req, res)=> {
    let response =  { unblocked: false, errors: [] }


    res.json(response)
}

// login
exports.login = (req, res)=> {
    let response =  { token: null, user: null }


    res.json(response)
}


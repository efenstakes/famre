
// add
exports.add = (req, res)=> {
    let response =  { saved: false, id: null, errors: [] }


    res.json(response)
}

// delete
exports.delete = (req, res)=> {
    let response =  { deleted: false, errors: [] }


    res.json(response)
}

// accept
exports.accept = (req, res)=> {
    let response =  { updated: false, errors: [] }


    res.json(response)
}

// deny
exports.deny = (req, res)=> {
    let response =  { updated: false, errors: [] }


    res.json(response)
}


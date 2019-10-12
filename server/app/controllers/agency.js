
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



// get requests
exports.all = (req, res)=> {
    let response =  { requests: [] }


    res.json(response)
}
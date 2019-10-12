// include external libraries


// include external libraries
const Models = require('../models')
const Utils = require('../utils')


// add
exports.add = async (req, res)=> {
    let response =  { saved: false, ref: null, id: null, errors: [] }

    let { family, agency, age_range } =  req.body
    let ref = Utils.generate_code()

    let frequest = await Models.FosterRequest({ family, agency, age_range, ref }).save()
    if( !frequest || !frequest._id ) return res.json(response)

    response.saved = true 
    response.id = frequest._id
    response.ref = ref

    res.json(response)
}

// delete
exports.delete = async (req, res)=> {
    let response =  { deleted: false, errors: [] }

    let { id } = req.params

    await Models.FosterRequest.findOneAndDelete(id)

    response.deleted = true

    res.json(response)
}

// accept
exports.accept = async (req, res)=> {
    let response =  { updated: false, errors: [] }

    let req_id = req.params
    let accepted = { status: true, date: Date.now() }

    let frequest = await Models.FosterRequest.findByIdAndUpdate(req_id, { accepted })
    if( !frequest || !frequest._id ) return res.json(response)

    response.updated = true 

    res.json(response)
}

// deny
exports.deny = async (req, res)=> {
    let response =  { updated: false, errors: [] }

    let req_id = req.params
    let accepted = { status: false, date: Date.now() }

    let frequest = await Models.FosterRequest.findByIdAndUpdate(req_id, { accepted })
    if( !frequest || !frequest._id ) return res.json(response)

    response.updated = true 

    res.json(response)
}


// get request of a family
exports.for_family = async (req, res)=> {
    let response =  { requests: [] }

    let { ref, id } = req.params

    let requests = await Models.FosterRequest.find({ ref, 'family.id': id })
    response.requests = requests

    res.json(response)
}
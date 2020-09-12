// include external libraries


// include external libraries
const Models = require('../models')
const Utils = require('../utils')


// add
exports.add = async (req, res)=> {
    let response =  { saved: false, ref: null, id: null, errors: [] }

    let { family, agency, age_range } =  req.body
    let ref = Utils.generate_code()

    let frequest = await Models.FosterRequest({ family, agency, age_range, ref, seen: false }).save()
    if( !frequest || !frequest._id ) return res.json(response)

    
    let message = request_received_message()
    Utils.send_mail({ receiver: family['email'], subject: 'Adoption Request', message })

    response.saved = true 
    response.id = frequest._id
    response.ref = ref

    res.json(response)
}

// details
exports.details = async (req, res)=> {
    let response =  { request: {} }

    let { code } = req.params

    let frequest = await Models.FosterRequest.findOne({ ref: code })
    if( !frequest || !frequest._id ) return res.json(response)

    response.request = frequest 

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

    let req_id = req.params.id
    let accepted = { status: true, date: Date.now() }

    let frequest = await Models.FosterRequest.findByIdAndUpdate(req_id, 
                                        { accepted, seen: true })
    if( !frequest || !frequest._id ) return res.json(response)

    response.updated = true 

    res.json(response)
}

// deny
exports.deny = async (req, res)=> {
    let response =  { updated: false, errors: [] }

    let req_id = req.params.id
    let accepted = { status: false, date: Date.now() }

    let frequest = await Models.FosterRequest.findByIdAndUpdate(req_id, 
                                    { accepted, seen: false })
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


// all
exports.all = async (req, res)=> {
    let response =  { requests: [] }

    let requests = await Models.FosterRequest.find({})
    response.requests = requests 

    res.json(response)
}



function request_received_message() {
    let message = `
    <div style='display:flex; flex-direction: column; align-items: center; align-content: center; background-color:#2cdeea'>
      <div style=''>
        <h1> Fam Adoptions </h1>
      </div>
      <div style=''>
     
        <p>
            Your request was successfully received. We are processing it.
        </p>
     
      </div>
    </div>  
  `

  return message
}
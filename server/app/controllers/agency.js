// include external libraries


// include external libraries
const Models = require('../models')



// add
exports.add =  async (req, res)=> {
    let response =  { saved: false, id: null, errors: [] }

    let { name, city, locality, phone, email, description } =  req.body

    let agency = await Models.Agency({ name, city, locality, phone, email, description }).save()
    if( !agency || !agency._id ) return res.json(response)

    response.saved = true 
    response.id = agency._id

    res.json(response)
}

// delete
exports.delete = async (req, res)=> {
    let response =  { deleted: false, errors: [] }

    let { id } = req.params

    await Models.Agency.findOneAndDelete(id)

    response.deleted = true

    res.json(response)
}


// details
exports.details = async (req, res)=> {
    let response =  { agency: {} }
 
    let { id } = req.params

    let agency = await Models.Agency.findOne({ _id: id })
    if( !agency || !agency._id ) return res.json(response)

    response.agency = agency 

    res.json(response)
}


// get agency requests
exports.requests = async (req, res)=> {
    let response =  { requests: [] }

    let { id } = req.params

    let requests0 = await Models.FosterRequest.find({ agency: id })
    let requests1 = await Models.FosterRequest.find({ agency: 'any' })
    response.requests = requests0.concat(requests1)

    res.json(response)
}


// get all agencies
exports.all = async (req, res)=> {
    let response =  { agencies: [] }

    let { city } = req.query

    let agencies = city ? await Models.Agency.find({ city }) : await Models.Agency.find({ })
    // let agencies = await Models.Agency.find({})
    
    response.agencies = agencies

    res.json(response)
}


// add staff
exports.add_staff = async (req, res)=> {
    let response =  { saved: false }

    let { id } = req.params
    let { staff_id } = req.body

    let staff = await Models.Staff.findById(staff_id)
    if( !staff ) return res.json(response)

    let agency = await Models.Agency.findById(id)
    if( !agency ) return res.json(response)

    let staff_list = agency.staff.push(agency)
    
    await Models.Agency.findByIdAndUpdate(id, { staff: staff_list })
    
    response.saved = true

    res.json(response)
}



// remove staff
exports.remove_staff = async (req, res)=> {
    let response =  { agencies: [] }


    let { id } = req.params
    let { staff_id } = req.body

    let staff = await Models.Staff.findById(staff_id)
    if( !staff ) return res.json(response)

    let agency = await Models.Agency.findById(id)
    if( !agency ) return res.json(response)

    let staff_list = agency.staff.filter((staf)=> staf._id != staff_id )
    
    await Models.Agency.findByIdAndUpdate(id, { staff: staff_list })
    
    response.saved = true

    res.json(response)
}

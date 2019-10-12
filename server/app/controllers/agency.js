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



// get requests
exports.all = async (req, res)=> {
    let response =  { requests: [] }

    let { id } = req.params

    let requests0 = await Models.FosterRequest.find({ agency: id })
    let requests1 = await Models.FosterRequest.find({ agency: 'any' })
    response.requests = requests0.concat(requests1)

    res.json(response)
}
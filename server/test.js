
let axios = require('axios')

let staffers = [
    { 
        name: 'Tobby Wakin', email: 'tobby@gmail.com',
        password: 'tobby123', priviledge: 'ADMIN' 
    },
    { 
        name: 'Eddy Monae', email: 'eddy@gmail.com',
        password: 'eddy123', priviledge: 'ADMIN' 
    },
    { 
        name: 'Eliud Wakin', email: 'eliud@gmail.com',
        password: 'eliud123', priviledge: 'ADMIN' 
    }
]


staffers.forEach((staff)=> {

    axios.post('http://localhost:3456/api/staff', 
        { ...staff }
        ).then((res)=> {
            console.log('saved')
        })
        .catch((err)=> {
            console.log('error saving ', err)
        })

})
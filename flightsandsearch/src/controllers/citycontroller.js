const { Cityservice }  = require('../services/index')


//here we get  value from client using req.body

//creating object of cityservice

const cityservice = new Cityservice();

//POST request
const create = async (req, res) => {
    try {

       
        const response = await cityservice.createcity(req.body);
        console.log(`response is:${response}`);
        return res.status(201).json(
            {
                data: response,
                success: true,
                message: 'successfully created city',
                err: {}
            }
        )

    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to created city',
                err: error
            }
        )


    }
}

//GET request /city/:id
const get = async (req, res) => {
    try {
        const response= await cityservice.getcity(req.params.id);
        return res.status(201).json(
            {
                data: response,
                success: true,
                message: 'successfully get city',
                err: {}
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to get city',
                err: error
            }
        )
    }
}

//patch request
const update = async (req, res) => {
    try {

        const response = await cityservice.updatecity(req.params.id, req.body);
        return res.status(201).json(
            {
                data: response,
                success: true,
                message: 'successfully update city',
                err: {}
            }
        )

    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to update city',
                err: error
            }
        )
    }
}


const del = async (req, res) => {
    try {
        const response= await cityservice.deletecity(req.params.id);//id can get from url products/101                 
        return res.status(201).json(
            {
                data: response,
                success: true,
                message: 'successfully deleted city',
                err: {}
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to delete city',
                err: error
            }
        )
    }
}

module.exports={
    create,
    get,
    update,
    del
}
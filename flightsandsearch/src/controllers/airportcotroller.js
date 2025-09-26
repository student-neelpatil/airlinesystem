const { Airportservice } = require('../services/index.js')


const airportservice = new Airportservice();


const create = async (req, res) => {

    try {

        const airport = await airportservice.createairports(req.body)
        return res.status(201).json(
            {
                data: airport,
                success: true,
                message: 'successfully created airport',
                err: {}
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to created airport',
                err: error
            }
        )
    }



}


module.exports={
    create
}
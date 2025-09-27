const { Airportservice, Cityservice } = require('../services/index.js')


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

const del = async (req, res) => {
    try {
        const response = await airportservice.deleteairport(req.params.id);
        return res.status(201).json(
            {
                data: response,
                success: true,
                message: 'successfully deleted airport',
                err: {}
            })

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to delete airport',
                err: error
            }
        )
    }
}

const find = async (req, res) => {
    try {
        const airports = await airportservice.getairports(req.params.id);
        return res.status(201).json(
            {
                data: airports,
                success: true,
                message: 'successfully search  airport',
                err: {}
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to search airport',
                err: error
            }
        )
    }

}

const update = async (req, res) => {
    try {
        const airport = await airportservice.updateairports(req.params.id, req.body);
        console.log("Req.params.id:", req.params.id);
        console.log("Req.body:", req.body);


        // if (airport === 0) {
        //     return res.status(404).json({
        //         data: {},
        //         success: false,
        //         message: "No airport found to update",
        //         err: {}
        //     });
        // }

        return res.status(200).json({
            data:  airport,
            success: true,
            message: "Airport updated successfully",
            err: {}
        });



    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                data: {},
                success: false,
                message: 'fail to update airport',
                err: error
            }
        )
    }
}






module.exports = {
    create, del, find, update
}
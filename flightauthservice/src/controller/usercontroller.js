const { Userservice } = require('../service/index.js');


const userservice = new Userservice();

const register = async (req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;

        const response = await userservice.register({ email, password });

        return res.status(201).json({
            message: 'user is created',
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(401).json({
            message: 'user is not created',
            data: {},
            success: false,
            err: { error }
        });
    }

}

const deleteuser = async (req, res) => {
    try {
        const response = await userservice.deleteuser(req.params.id);
        return res.status(201).json({
            message: 'user is deleted',
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(401).json({
            message: 'user is not deleted',
            data: {},
            success: false,
            err: { error }
        });
    }
}

const signin = async (req, res) => {
    try {
        const response = await userservice.signin(req.body.email, req.body.password);
        return res.status(201).json({
            message: 'user is signin successfully',
            data: response,
            success: true,
            err: {}
        })

    } catch (error) {
        return res.status(401).json({
            message: 'user is not signin',
            data: {},
            success: false,
            err: { error }
        });
    }

}

const isauthenticated = async (req, res) => {
    try {

        const token = req.headers['x-access-token'];
        const response = await userservice.isauthenticated(token);
        return res.status(201).json({
            message: 'user is authenticated successfully',
            data: response,
            success: true,
            err: {}
        })

    } catch (error) {
        return res.status(401).json({
            message: 'user is not authenticated',
            data: {},
            success: false,
            err: { error }
        });
    }

}




module.exports = {
    register, deleteuser, signin,isauthenticated
}
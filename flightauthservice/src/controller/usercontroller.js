const { Userservice }=require('../service/index.js');


const userservice = new Userservice();

const register=async(req,res)=>{

    try {
        const email=req.body.email;
        const password=req.body.password;

        const response=await userservice.register({email,password});

        return res.status(201).json({
            message:'user is created',
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(401).json({
            message:'user is not created',
            data: {},
            success: false,
            err: {error}
        });
    }

}

const search=async(req,res)=>{
    try {
        const response=await userservice.searchById(req.params.id);
        return res.status(201).json({
            message:'user is created',
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(401).json({
            message:'user is not created',
            data: {},
            success: false,
            err: {error}
        });
    }
}


module.exports={
    register,search
}
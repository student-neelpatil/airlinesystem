const validateuser=(req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(401).json({
                data:{},
                success: false,
                message: 'something went wrong',
                err: "email or pasword is missing"
        })
    }
    next();
}


module.exports=validateuser;
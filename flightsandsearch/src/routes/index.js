const express=require('express')

const router=express.Router()


//route -> api/v1/city
const v1routes=require('./v1/index');

router.use('/v1',v1routes);//mounting another router

module.exports=router;
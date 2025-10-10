const express=require('express');

const router=express.Router();

const usercontroller=require('../../controller/usercontroller');

router.post('/signup',usercontroller.register);
router.get('/search/:id',usercontroller.search);

module.exports=router;
const express=require('express');
const validateuser=require("../../middleware/validate-user");

const router=express.Router();

const usercontroller=require('../../controller/usercontroller');

router.post(
    '/signup',
    validateuser, 
    usercontroller.register
 );


router.post(
    '/signin',
    validateuser,
    usercontroller.signin 
);

router.delete(
    '/deleteuser/:id',
    usercontroller.deleteuser
)

module.exports=router;
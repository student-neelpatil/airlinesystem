const express=require('express')
const Citycontroller=require('../../controllers/citycontroller')  //../../ -> going two directories up

const router=express.Router()

//routing
router.post('/city',Citycontroller.create);
router.get('/citysearch/:id',Citycontroller.get);
router.patch('/cityupdate/:id',Citycontroller.update);
router.delete('/citydelete/:id',Citycontroller.del);

module.exports=router;
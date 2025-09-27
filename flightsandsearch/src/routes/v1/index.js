const express=require('express')
const Citycontroller=require('../../controllers/citycontroller')  //../../ -> going two directories up
const Airportcontroller=require('../../controllers/airportcotroller')
const router=express.Router()

//routing
router.post('/city',Citycontroller.create);
router.get('/citysearch/:id',Citycontroller.get);
router.patch('/cityupdate/:id',Citycontroller.update);
router.delete('/citydelete/:id',Citycontroller.del);

//airports
router.post('/airport',Airportcontroller.create);
router.delete('/deleteairport/:id',Airportcontroller.del);
router.get('/getairports/:id',Airportcontroller.find);
router.patch('/updateairports/:id',Airportcontroller.update);

module.exports=router;
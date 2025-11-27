const express = require ('express')
const Facility = require('../models/facilityModel')
const { FacilityCreateController, FacilityGetController,FacilityUpdateController,FacilityDeleteController } = require('../controller/facility.controller')
const upload = require('../middlewares/uploadMiddlewares')
const route = express.Router()

route.post('/createfacility',upload.fields([{ name: 'image' },{ name: 'icons'}]),FacilityCreateController); 
route.get('/getfacility',FacilityGetController)
route.put('/updatesfacility/:id',upload.single('image'),FacilityUpdateController)
route.delete('/deletefacility/:id',FacilityDeleteController)


module.exports=route
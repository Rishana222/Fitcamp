const express = require ('express')
const Facility = require('../models/facilityModel')
const { FacilityCreateController, FacilityGetController,FacilityUpdateController,FacilityDeleteController } = require('../controller/facility.controller')
const route = express.Router()

route.post('/createfacility',FacilityCreateController)
route.get('/getfacility',FacilityGetController)
route.put('/updatesfacility/:id',FacilityUpdateController)
route.delete('/deletefacility/:id',FacilityDeleteController)


module.exports=route
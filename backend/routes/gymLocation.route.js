const express = require ('express')
const GymLocation = require('../models/gymLocation')
const { GymLocationCreateController, GymLocationGetController, GymLocationUpdateController, GymLocationDeleteController } = require('../controller/gymLocation.controller')
const route = express.Router()

route.post('/creategymLocation',GymLocationCreateController)
route.get('/getgymLocation',GymLocationGetController)
route.put('/updategymLocation',GymLocationUpdateController)
route.delete('/deletegymLocation/:id',GymLocationDeleteController)


module.exports=route
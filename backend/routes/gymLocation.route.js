const express = require ('express')
const GymLocation = require('../models/gymLocation')
const { GymLocationCreateController, GymLocationGetController, GymLocationUpdateController, GymLocationDeleteController } = require('../controller/gymLocation.controller')
const upload = require('../middlewares/uploadMiddlewares')
const route = express.Router()

route.post('/creategymLocation',upload.single('cardImage'),GymLocationCreateController)
route.get('/getgymLocation',GymLocationGetController)
route.put('/updategymLocation/:id',upload.single('cardImage'),GymLocationUpdateController);
route.delete('/deletegymLocation/:id',GymLocationDeleteController)


module.exports=route

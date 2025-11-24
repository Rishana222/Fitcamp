const express = require('express');
const Gym = require('../models/GymModel')
const upload = require('../middlewares/uploadMiddlewares');
const { GymCreateController,GymGetController,GymGetByIdController,GymUpdateController,GymDeleteController} = require('../controller/gym.controller');
const route = express.Router();

route.post('/creategym', upload.single('image'), GymCreateController);
route.get('/getgym', GymGetController);
route.get('/getgym/:id', GymGetByIdController);
route.put('/updategym/:id', upload.single('image'), GymUpdateController);
route.delete('/deletegym/:id', GymDeleteController);

module.exports = route;

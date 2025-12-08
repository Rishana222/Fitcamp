const express = require('express');
const Gym = require('../models/GymModel')
const upload = require('../middlewares/uploadMiddlewares');
const { GymCreateController,GymGetController,GymGetByIdController,GymUpdateController,GymDeleteController} = require('../controller/gym.controller');
const route = express.Router();

route.post(
  '/creategym', 
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'openingIcon', maxCount: 1 }
  ]), 
  GymCreateController
);
route.get('/getgym', GymGetController);
route.get('/getgym/:id', GymGetByIdController);
route.put(
  "/updategym/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "openingIcon", maxCount: 1 }
  ]),
  GymUpdateController
);
route.delete('/deletegym/:id', GymDeleteController);

module.exports = route;

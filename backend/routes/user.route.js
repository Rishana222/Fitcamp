const express = require('express')
const USER = require('../models/userModel');
const { userCreateController, userGetController, userDeleteController,userAllGetController } = require('../controller/user.controller');

const route = express.Router();


route.post('/create',userCreateController)
route.get('/get', userAllGetController);
route.get('/getuser/:id',userGetController)
route.delete('/deleteuser/:id',userDeleteController)


module.exports=route
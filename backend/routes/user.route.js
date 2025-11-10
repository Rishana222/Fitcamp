const express = require('express')
const USER = require('../models/userModel');
const { userCreateController, userGetController, userDeleteController } = require('../controller/user.controller');

const route = express.Router();


route.post('/create',userCreateController)
route.get('/get', userGetController);
route.get('/getuser/:id',userGetController)
route.delete('/deleteuser/:id',userDeleteController)


module.exports=route
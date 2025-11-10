const express = require('express')
const USER = require('../models/userModel');
const { userCreateController, userGetController, userDeleteController } = require('../controller/user.controller');

const route = express.Router();


route.post('/create',userCreateController)
route.get('/getuser',userGetController)
route.delete('/deleteuser',userDeleteController)


module.exports=route
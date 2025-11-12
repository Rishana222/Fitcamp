const express = require('express')
const Membership = require('../models/membershipModel')
const { membershipCreateController, membershipGetController, membershipGetByIdController, membershipUpdateController,membershipDeleteController } = require('../controller/membership.controller')
const route = express.Router()

route.post('/createmembership',membershipCreateController)
route.get('/get',membershipGetController)
route.get('/getmembership/:id',membershipGetByIdController)
route.put('/updatemembership/:id',membershipUpdateController)
route.delete('/deletemembership/:id',membershipDeleteController)

module.exports=route
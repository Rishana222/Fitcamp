const express = require('express')
const PAYMENT = require('../models/paymentModel')
const{ paymentCreationController, paymentGetController } = require('../controller/payment.controller')
const route = express.Router()
 
route.post('/createpayment',paymentCreationController)
route.get('/getpayment',paymentGetController)

module.exports=route
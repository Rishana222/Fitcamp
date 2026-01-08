const express = require ('express')
const { CheckoutCreateController, CheckoutGetAllController, CheckoutGetByIdController } = require('../controller/checkout.controller')
const route = express.Router() 
route.post('/createcheckout',CheckoutCreateController);
route.get('/getcheckout',CheckoutGetAllController);
route.get('/getcheckout/:id',CheckoutGetByIdController);
module.exports=route
const express = require('express')
const { subscriptionCreateController, subscriptionGetController ,subscriptionDeleteController,subscriptionUpdateController,getAllSubscriptionsController} = require('../controller/subscription.controller')

const route = express.Router();

route.post('/createsubscription',subscriptionCreateController)
route.get('/get',getAllSubscriptionsController)
route.get('/getsubscription/:id',subscriptionGetController)
route.put('/updatesubscription/:id',subscriptionUpdateController)
route.delete('/deletesubscription/:id',subscriptionDeleteController)




module.exports=route

const express = require('express');
const {DBConnection} = require("./config/db");
const userRoute = require('./routes/user.route')
const subscriptionRoute = require('./routes/subscription.route')
const paymentRoute = require('./routes/payment.route')
const membershipRoute = require('./routes/membership.route')
const { errorMiddleware } = require('./handlers/errorHandler');

const app= express();
const PORT = 5000;
app.use(express.json());
DBConnection()

app.use('/api/user',userRoute)
app.use('/api/subscription',subscriptionRoute)
app.use('/api/payment',paymentRoute)
app.use('/api/membership',membershipRoute)
app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`sever is running on http://localhost:${PORT}`);
    
})
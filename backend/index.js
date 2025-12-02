const express = require('express');
const dotenv = require("dotenv");
const {DBConnection} = require("./config/db");
const userRoute = require('./routes/user.route')
const subscriptionRoute = require('./routes/subscription.route')
const paymentRoute = require('./routes/payment.route')
const membershipRoute = require('./routes/membership.route')
const gymLocationRoute = require('./routes/gymLocation.route')
const facilityRoute = require ('./routes/facility.route')
const gymRoute = require ('./routes/gym.route')
const { errorMiddleware } = require('./handlers/errorHandler');
const cors = require('cors');
const path = require('path');   

dotenv.config();

const app= express();
app.use(cors())
const PORT = process.env.PORT || 5000;
app.use(express.json());
DBConnection()


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/user',userRoute)
app.use('/api/subscription',subscriptionRoute)
app.use('/api/payment',paymentRoute)
app.use('/api/membership',membershipRoute)
app.use('/api/gymLocation',gymLocationRoute)
app.use('/api/facility',facilityRoute)
app.use('/api/gym',gymRoute)
app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
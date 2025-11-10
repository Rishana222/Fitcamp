const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    subscriptionId: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    method: {
        enum: ['UPI', 'card', 'cash'],
        required:true
    },
    status: {
        enum: ['pending', 'completed', 'failed'],
        required:true
    },   
    date:{
        type:String,
        required:true
    }
})
const payment = mongoose.model('payment', paymentSchema)
module.exports = payment
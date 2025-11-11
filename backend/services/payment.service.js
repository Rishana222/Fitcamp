const Payment = require('../models/paymentModel')
const { ErrorHandler } = require('../handlers/errorHandler')



const createPaymentService = async(paymentInfo)=>{
    const payment = new Payment(paymentInfo)
    return await payment.save()
}

const getPaymentService = async()=>{
    return await Payment.find()
}
module.exports={createPaymentService,getPaymentService}
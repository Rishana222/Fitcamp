const Payment = require('../models/paymentModel')
const { ErrorHandler } = require('../handlers/errorHandler')

const createPaymentService = async (data)=>{
    const {subscriptionId,amount,method,status,date} = data;
   
}
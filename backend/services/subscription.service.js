const Subscription = require('../models/subscriptionModel')
const {ErrorHandler} = require('../handlers/errorHandler')

const createSubscriptionService = async (data)=>{
    const {membershipId,startDate,endDate,status} = data
    if  (!membershipId || !startDate || !endDate || !status) {
        throw new ErrorHandler ("required failed",400)
    }
    const subscribe = await Subscription.create(data)
    return subscribe
   
};
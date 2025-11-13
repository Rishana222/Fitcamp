const Subscription = require('../models/subscriptionModel')
const { ErrorHandler } = require('../handlers/errorHandler')

const createSubscriptionService = async (data) => {
    const { membershipId, startDate, endDate, status } = data;
    if (!membershipId || !startDate || !endDate || !status) {
        throw new ErrorHandler("All fields are required", 400)
    }
    const subscribe = await Subscription.create(data)
    return subscribe
};

const getAllSubscriptionsService = async () => {
    return await Subscription.find();
};

const getSubscriptionsService = async (id)=>{
    if (!id) return null
     const subscription = await  Subscription.findById(id) 
     return subscription || null
}

const updateSubscriptionsService = async (id,update) =>{
    if (!id)
         throw new Error('invalid subscription id')     
    const updated = await Subscription.findByIdAndUpdate(id,update,{ new: true })
    if (!updated) 
        throw new Error('subscription not found')
    return updated
} 

const deleteSubscriptionsService = async (id) => {
    if (!id)
       throw new Error('user id is required') 
    const deleted = await Subscription.findByIdAndDelete(id)
    return deleted
}

module.exports = { createSubscriptionService, getAllSubscriptionsService, getSubscriptionsService, updateSubscriptionsService, deleteSubscriptionsService }
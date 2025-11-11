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

const getAllSubscriptionsService = async ()=>{
    return await Subscription.find();
};

const getSubscriptionsService = async (id) => {
    return await Subscription.findById(id);
};

const updateSubscriptionsService = async (id,update) =>{
    return await  Subscription.findByIdAndUpdate(id,update,{new:true});
};

const deleteSubscriptionsService = async (id) =>{
    return await Subscription.findByIdAndDelete(id);
};

module.exports = { createSubscriptionService,getAllSubscriptionsService ,getSubscriptionsService,updateSubscriptionsService,deleteSubscriptionsService}
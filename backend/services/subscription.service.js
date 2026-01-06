const Subscription = require('../models/subscriptionModel')
const { ErrorHandler } = require('../handlers/errorHandler')

const createSubscriptionService = async (data) => {
    const { membershipName, desc, amount, duration, features, status } = data;
    if (!membershipName || !amount || !duration || !status || !desc ) {
        throw new ErrorHandler("All fields are required", 400)
    }
    const subscribe = await Subscription.create({
        membershipName,
        desc,
        amount,
        duration,
        features: features || [],
        status
    });
    return subscribe
};

const getAllSubscriptionsService = async () => {
    return await Subscription.find();
};

const getSubscriptionsService = async (id) => {
    const subscription = await Subscription.findById(id);
    if (!subscription) {
        throw new ErrorHandler('Subscription not found', 404);
    }
    return subscription;
};

const updateSubscriptionsService = async (id, updateData) => {
    const existingSubscription = await Subscription.findById(id);
    if (!existingSubscription) {
        throw new ErrorHandler('subscription not found', 404);
    }
    const updatedSubscription = await Subscription.findByIdAndUpdate(id, updateData, { new: true });
    return updatedSubscription;
};

const deleteSubscriptionsService = async (id) => {
    const existingSubscription = await Subscription.findById(id);
    if (!existingSubscription) {
        throw new ErrorHandler('subscription not found', 404)
    }
    const subscription = await Subscription.findByIdAndDelete(id);
    return subscription;
};

module.exports = { createSubscriptionService, getAllSubscriptionsService, getSubscriptionsService, updateSubscriptionsService, deleteSubscriptionsService }
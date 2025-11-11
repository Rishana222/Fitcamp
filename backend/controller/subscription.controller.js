const { createSubscriptionService, getAllSubscriptionsService,getSubscriptionsService, updateSubscriptionsService, deleteSubscriptionsService } = require('../services/subscription.service')

const subscriptionCreateController = async (req, res) => {
    try {
        const subscription = await createSubscriptionService(req.body)
        return res.status(201).json({ success: true, data: subscription, message: "Subscription created successfully" })
    } catch (error) {
        throw error
    }
};

const getAllSubscriptionsController = async (req, res) => {
    try {
        const subscriptions = await getAllSubscriptionsService(); 
        return res.status(200).json(subscriptions);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const subscriptionGetController = async (req, res) => {
    try {
        const subscriptions = await getSubscriptionsService(req.params.id)
        return res.status(200).json(subscriptions)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const subscriptionUpdateController = async (req,res)=>{
    try {
        const updatedSubscription = await updateSubscriptionsService(req.params.id, req.body);

        if (!updatedSubscription) {
            return res.status(400).json({message:"Subscription not found"})
        }

        res.status(200).json({message:"Subscription updated successfully"})
    } catch (error) {
        return res.status(500).json({message:"something went wrong"})
    }
}

const subscriptionDeleteController = async (req,res)=>{
    try {
        await deleteSubscriptionsService(req.params.id);
        return res.status(200).json({message:'User deleted successfully' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = { subscriptionCreateController, subscriptionGetController ,subscriptionDeleteController,subscriptionUpdateController,getAllSubscriptionsController}
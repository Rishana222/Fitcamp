const { ErrorHandler } = require('../handlers/errorHandler');
const { createSubscriptionService, getAllSubscriptionsService,getSubscriptionsService, updateSubscriptionsService, deleteSubscriptionsService } = require('../services/subscription.service')

const subscriptionCreateController = async (req, res,) => {
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
     const id= req.params.id
     if (!id){
        throw new ErrorHandler('ID is required',400)
     }
     const subscription = await getSubscriptionsService(id);
   return res.status(200).json({success: true, data: subscription})
  } catch (error) {
    return res.status(400).json({success: false,message: error.message})
  }
}

const subscriptionUpdateController = async (req,res)=>{
   try {
    const id = req.params.id;
    const updateData = req.body;
    if(!id){
        throw new ErrorHandler('ID is required',400)
    }
    const updatedSubscription = await updateSubscriptionsService(id,updateData);
    res.status(200).json({success: true, message: "Subscription updated successfully", data: updatedSubscription})
    } catch (error) {
    res.status(400).json({success: false,message: error.message})
   }
}       
           
   

const subscriptionDeleteController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new ErrorHandler("ID is required", 400);
        }
        const deletedSubscription = await deleteSubscriptionsService(id);

        res.status(200).json({ success: true, message: 'Subscription deleted successfully', data: deletedSubscription
         });
    } catch (error) {
        res.status(error.status || 400).json({ success: false,message: error.message
        });
    }
};      
            
       
           
           
        

module.exports = { subscriptionCreateController, subscriptionGetController ,subscriptionDeleteController,subscriptionUpdateController,getAllSubscriptionsController}
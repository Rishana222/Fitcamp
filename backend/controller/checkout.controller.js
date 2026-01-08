const {ErrorHandler} = require('../handlers/errorHandler');
const {createCheckoutService, getAllCheckoutService, getCheckoutServiceById} = require('../services/checkout.service');

const CheckoutCreateController = async (req, res) => {
    try {
        const data = req.body; 
        const checkout = await createCheckoutService(data);
        return res.status(201).json({success:true, message:"Checkout created successfully",data: checkout});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

const CheckoutGetAllController = async (req, res) => {
    try {
        const checkouts = await getAllCheckoutService();
        return res.status(200).json(checkouts);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};
const CheckoutGetByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new ErrorHandler('id is required', 400);
        }
        const checkout = await getCheckoutServiceById(id);
        return res.status(200).json(checkout);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }   
};

module.exports = {
    CheckoutCreateController,
    CheckoutGetAllController,
    CheckoutGetByIdController
};
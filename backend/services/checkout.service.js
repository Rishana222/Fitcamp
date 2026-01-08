const Checkout = require("../models/checkoutModel");
const { ErrorHandler } = require("../handlers/errorHandler");

const createCheckoutService = async (data) => {
  const checkout = new Checkout(data);
  return await checkout.save();
};

const getAllCheckoutService = async () => {
  return await Checkout.find().populate("userId").populate("planId");
};

const getCheckoutServiceById = async (id) => {
  const checkout = await Checkout.findById(id).populate("userId").populate("planId"); 
    if (!checkout) {
        throw new ErrorHandler("Checkout not found", 404);
    }
    return checkout;
}

module.exports = {
  createCheckoutService,
  getAllCheckoutService,
  getCheckoutServiceById,
};
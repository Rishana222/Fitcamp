const payment = require('../models/paymentModel');
const { createPaymentService, getPaymentService } = require('../services/payment.service')

const paymentCreationController = async (req, res) => {
    try {
        const payment = await createPaymentService(req.body)
        return res.status(201).json({ message: "Payment added successfully", payment })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

const paymentGetController = async (req, res) => {
    try {
        const payment = await getPaymentService()
        return res.status(200).json(payment)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = { paymentCreationController, paymentGetController }
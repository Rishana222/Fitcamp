const {ErrorHandler} = require('../handlers/errorHandler');
const {CreateTransactionService,GetAllTransactionService} = require('../services/transaction.service');

const TransactionCreateController = async (req, res) => {
    try {
        const data = req.body;  
        const transaction = await CreateTransactionService(data);
        return res.status(201).json({success:true, message:"Transaction created successfully",data: transaction});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};

const TransactionGetAllController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const transactions = await GetAllTransactionService(userId);

        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ success: false, message: "No transactions found" });
        }

        return res.status(200).json({ success: true, data: transactions });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = {
    TransactionCreateController,
    TransactionGetAllController
};
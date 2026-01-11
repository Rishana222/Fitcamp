const mongoose = require('mongoose');
const Transaction = require('../models/transactionModel');
const subscribe = require('../models/subscriptionModel'); // subscription model

const CreateTransactionService = async (data) => {
  const { userId, planId, packageName, amount, duration } = data;

  const startedAt = new Date();
  const endedAt = new Date(startedAt);

  const months = parseInt(duration.replace(/\D/g, "")); // " 6 Month" → 6
  endedAt.setMonth(endedAt.getMonth() + months);

  const transaction = new Transaction({
    userId: new mongoose.Types.ObjectId(userId),
    planId: new mongoose.Types.ObjectId(planId),
    packageName,
    amount,
    duration: months.toString(),
    startedAt,
    endedAt
  });

  await transaction.save();
  return transaction;
};

const GetAllTransactionService = async (userId) => {
  return await Transaction.find({
    userId: new mongoose.Types.ObjectId(userId)
  })
    .sort({ createdAt: -1 })
    .populate("userId")
    .populate("planId");
};

module.exports = { CreateTransactionService, GetAllTransactionService };

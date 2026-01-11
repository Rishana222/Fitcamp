const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", 
      required: true,
    },

    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subscribe",
      required: true,
    },

    packageName: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    startedAt: {
      type: Date,
      required: true,
    },

    endedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true })
const Transaction = mongoose.model("transaction", transactionSchema)
module.exports = Transaction
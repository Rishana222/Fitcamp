const mongoose = require("mongoose");


const checkoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

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
  },
  {
    timestamps: true,
  }
);

const Checkout = mongoose.model("Checkout", checkoutSchema);
module.exports = Checkout;
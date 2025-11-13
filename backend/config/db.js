const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.log(" DB connection error:", error.message);
  }
};

module.exports = { DBConnection };

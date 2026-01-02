const { ErrorHandler } = require("../handlers/errorHandler");
const jwt = require("jsonwebtoken")

 const generateAccessToken = (payload) => {
  const secret = process.env.JWT_ACCESS_SECRET;

  if (!secret) {
    throw new ErrorHandler(500, "Access secret key is missing");
  }

  return jwt.sign(payload, secret, {
    expiresIn: "7d", // adjust as needed
  });
};

module.exports = {generateAccessToken};
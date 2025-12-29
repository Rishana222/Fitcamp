const User = require('../models/userModel');
const { ErrorHandler } = require('../handlers/errorHandler');
const bcrypt = require('bcryptjs');

const CreateLoginService = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
        throw new ErrorHandler("User not found", 404);
    }  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ErrorHandler("Invalid password", 400);
    }
    return {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
}
module.exports = { CreateLoginService };
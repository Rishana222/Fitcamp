const User = require('../models/userModel');
const { ErrorHandler } = require('../handlers/errorHandler');
const bcrypt = require('bcryptjs');

const CreateSignupService = async (data) => {
    const { name, email, password, phoneNo, age, gender } = data;

     const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ErrorHandler("Email already registered", 400);
  }

    const phoneExist = await User.findOne({ phoneNo });
  if (phoneExist) {
    throw new ErrorHandler("Phone number already registered", 400);
  }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        phoneNo,
        age,   
        gender
    });

    return await newUser.save();
}
module.exports = { CreateSignupService };
const User = require('../models/userModel')
const { ErrorHandler } = require('../handlers/errorHandler')

const createUserService = async (data) => {
    const { name, email, password, phoneNo, age, gender } = data
    if (!name || !email || !password || !phoneNo || !age || !gender) {
        throw new ErrorHandler("All fields are required", 400)
    }
    const user = await User.create(data)
    return user
}

const getAllUserService = async () => {
    return await User.find()
}

const getUserService = async (id)=>{
    const user = await User.findById(id);
    if (!user){
        throw new ErrorHandler('user not found',404)
    }
    return user;
}

const deleteUserService = async (id)=>{
    const existingUser = await User.findById(id);
    if (!existingUser){
        throw new ErrorHandler('user not found',404);
    }
    const user =await User.findByIdAndDelete(id);
    return user;
}

module.exports = { createUserService, getUserService, deleteUserService, getAllUserService }
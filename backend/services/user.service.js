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

const getUserService = async (id) => {
    return await User.findById(id);
}

const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = { createUserService, getUserService ,deleteUserService}
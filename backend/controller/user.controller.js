const { createUserService, getUserService, deleteUserService } = require('../services/user.service')



exports.userCreateController = async (req, res) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        throw error
    }
};

exports.userGetController = async (req, res) => {
    try {
        const users = await getUserService();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

exports.userDeleteController = async (req, res) => {
    try {
        await deleteUserService(req.params.id);
        return res.status(200).json({message:'User deleted successfully' })
    } catch (error) {
       return res.status(400).json({ message:error.message});
    }
};

module.exports = { userCreateController, userGetController, userDeleteController }
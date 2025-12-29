const {CreateLoginService} = require('../services/login.service');
const ErrorHandler = require('../handlers/errorHandler');

const CreateLoginController = async (req, res) => {
    try {
        const user = await CreateLoginService(req.body);
        return res.status(200).json({
            message: "Login successful",
            userId: user._id,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { CreateLoginController };
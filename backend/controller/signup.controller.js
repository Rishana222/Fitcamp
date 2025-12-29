const ErrorHandler = require('../handlers/errorHandler');
const { CreateSignupService } = require('../services/signup.service');

const CreateSignupController = async (req, res) => {
    try {
        const user = await CreateSignupService(req.body);

        return res.status(201).json({
            message: "Signup successful",
            userId: user._id,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { CreateSignupController };
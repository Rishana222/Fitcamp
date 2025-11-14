const { errorMiddleware, ErrorHandler } = require('../handlers/errorHandler');
const { createUserService, getUserService, deleteUserService,getAllUserService } = require('../services/user.service')



const userCreateController = async (req, res) => {
    try {
      const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        throw error
    }
};

const userAllGetController = async (req, res) => {
  try {
    const users = await getAllUserService()
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const userGetController = async (req, res) => {
    try {
      // const id = req.params.id
      // if(!id){
      //   throw ErrorHandler("id requ",400)

      // }
        const users = await getUserService(req.params.id);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const userDeleteController = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            throw ErrorHandler("id requ", 400);
        }

        await deleteUserService(id);

        return res.status(200).json({
            message: 'User deleted successfully'
        });

    } catch (error) {
        return res.status(error.status || 400).json({
            message: error.message
        });
    }
};
module.exports = { userCreateController, userGetController, userDeleteController,userAllGetController }
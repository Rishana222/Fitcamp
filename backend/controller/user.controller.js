const { errorMiddleware, ErrorHandler } = require('../handlers/errorHandler');
const { createUserService, getUserService, deleteUserService,getAllUserService } = require('../services/user.service')



const userCreateController = async (req, res) => {
    try {
      const user = await createUserService(req.body)
      res.status(201).json({ success: true, data: user });
    } catch (error) {
       res.status(400).json({ success: false, message: error.message });
    }
};

const userAllGetController = async (req, res) => {
    try {
        const users = await getAllUserService();
       res.status(200).json({ success: true, data: users });
    } catch (error) {
         res.status(400).json({ success: false, message: error.message });
    }
};

const userGetController = async (req, res) => {
    try {
         const id = req.params.id;
        if (!id) {
            throw new ErrorHandler("ID is required", 400);
        }
        const user = await getUserService(id);
        res.status(200).json({ success: true, data: user});
       } catch (error) {
        res.status(error.statusCode || 400).json({ success: false,message: error.message
       });
    }
};    
    
const userDeleteController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            throw new ErrorHandler("ID is required", 400);
        }

        const deletedUser = await deleteUserService(id);

        res.status(200).json({success: true,message: 'User deleted successfully',data: deletedUser
        });    
        } catch (error) {
        res.status(error.statusCode || 400).json({success: false, message: error.message
         });
    }
};     
           
          
            
        
    
module.exports = { userCreateController, userGetController, userDeleteController,userAllGetController }
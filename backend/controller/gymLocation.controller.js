const { ErrorHandler } = require('../handlers/errorHandler')
const { createGymLocationService, getGymLocationService, updateGymLocationService, deleteGymLocationService } = require('../services/gymLocation.service')

const GymLocationCreateController = async (req, res) => {
    try {
        const gymLocation = await createGymLocationService(req.body)
        return res.status(201).json(gymLocation)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const GymLocationGetController = async (req,res) => {
    try {
        const gyms = await getGymLocationService()
        return res.status(200).json(gyms)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const GymLocationUpdateController = async (req, res) => {
    try {
     const id = req.params.id;
     const update = req.body;
     if (!id){
        throw new ErrorHandler('id id required',400)
     }
     const updatedLocation = await updateGymLocationService(id,update)
     return res.status(200).json({success:true,message:'location updated successfully',data:updatedLocation})
    } catch (error) {
    return res.status(400).json({success:false,message:error.message}) 
    }
}

const GymLocationDeleteController = async (req,res) => {
 try {
    const id = req.params.id;
    if (!id){
        throw new ErrorHandler('id is required',400)
    }
    const deleteGymLocation = await deleteGymLocationService(id);
    return res.status(200).json({success:true,message:'location deleted successfully',data:deleteGymLocation})
 } catch (error) {
    return res.status(400).json({success:false,message:error.message}) 
 }
}



module.exports = { GymLocationCreateController, GymLocationGetController, GymLocationUpdateController, GymLocationDeleteController }
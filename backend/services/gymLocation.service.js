const GymLocation = require ('../models/gymLocation')
const {ErrorHandler} = require ('../handlers/errorHandler')

const createGymLocationService =async (data)=>{
    const gym = await GymLocation(data)
    return await gym.save()
}

const getGymLocationService = async()=>{
    return await GymLocation.find()
}

const updateGymLocationService = async (id,update)=>{
    if(!id)
        throw new ErrorHandler('invalid id')
    const updated = await GymLocation.findByIdAndUpdate(id,update,{new:true})
    if (!updated)
        throw new ErrorHandler("gymLocation not found")
    return updated
}

const deleteGymLocationService = async (id)=>{
    if(!id)
        throw new ErrorHandler('user id is required')
    const deleted = await GymLocation.findByIdAndDelete(id)
    return deleted
}

module.exports={createGymLocationService,getGymLocationService,updateGymLocationService,deleteGymLocationService}
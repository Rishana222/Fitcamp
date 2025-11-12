const GymLocation = require ('../models/gymLocation')

const createGymLocationService =async (data)=>{
    const gym = await GymLocation(data)
    return await gym.save()
}

const getGymLocationService = async()=>{
    return await GymLocation.find()
}

const updateGymLocationService = async (id, data)=>{
    return await GymLocation.findByIdAndUpdate(id,update, { new: true })
}

const deleteGymLocationService = async (id)=>{
    return await GymLocation.findByIdAndDelete(id)
}

module.exports={createGymLocationService,getGymLocationService,updateGymLocationService,deleteGymLocationService}
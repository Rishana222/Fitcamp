const GymLocation = require ('../models/gymLocation')
const {ErrorHandler} = require ('../handlers/errorHandler')
const { findById } = require('../models/membershipModel')

const createGymLocationService =async (data)=>{
    const gym = await GymLocation(data)
    return await gym.save()
}

const getGymLocationService = async()=>{
    return await GymLocation.find()
}

const updateGymLocationService = async (id,update)=>{
const existingLocation = await GymLocation.findById(id)
if (!existingLocation) {
    throw new ErrorHandler('Location not found',404)
}
const updatedLocation = await GymLocation.findByIdAndUpdate(id,update,{new:true})
return updatedLocation
}

const deleteGymLocationService = async (id)=>{
  const existingLocation = await findById(id)
  if(!existingLocation){
    throw new ErrorHandler('Location not found',404)
  }
  const location = await GymLocation.findByIdAndDelete(id)
  return location
}

module.exports={createGymLocationService,getGymLocationService,updateGymLocationService,deleteGymLocationService}
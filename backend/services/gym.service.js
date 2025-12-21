const Gym = require('../models/GymModel')
const {ErrorHandler} = require ('../handlers/errorHandler')

const createGymService = async (data)=>{
    const gym = new Gym(data)
     return await gym.save()      
}

const getAllGymService = async ()=>{
    return await Gym.find().populate('gymLocation').populate('facilities');
}

const getGymServiceById = async (id) => {
  const gym = await Gym.findById(id)
    .populate('gymLocation')
    .populate('facilities');

  if (!gym) {
    throw new ErrorHandler("Gym not found", 404);
  }
  return gym;
};


const getGymsByLocationService = async (locationId) => {
  const gyms = await Gym.find({ gymLocation: locationId }).populate('facilities');
  if (!gyms || gyms.length === 0) {
    throw new ErrorHandler("No gyms found for this location", 404);
  }
  return gyms;
};

const updateGymService = async (id, update) => {
  const existingGym = await Gym.findById(id);

  if (!existingGym) {
    throw new ErrorHandler("Gym not found", 404);
  }

  const updatedGym = await Gym.findByIdAndUpdate(id, update, { new: true });
  return updatedGym;
};

const deleteGymService = async (id) => {
  const existingGym = await Gym.findById(id);

  if (!existingGym) {
    throw new ErrorHandler("Gym not found", 404);
  }

  const deletedGym = await Gym.findByIdAndDelete(id);
  return deletedGym;
};


module.exports={createGymService,getAllGymService,getGymServiceById,updateGymService,deleteGymService,getGymsByLocationService}
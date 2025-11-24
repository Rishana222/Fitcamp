const Gym = require('../models/GymModel')
const {ErrorHandler} = require ('../handlers/errorHandler')

const createGymService = async (data)=>{
    const gym = new Gym(data)
     return await gym.save()      
}

const getAllGymService = async ()=>{
    return await Gym.find()
}

const getGymServiceById = async (id) => {
  const gym = await Gym.findById(id)
  if (!gym) {
    throw new ErrorHandler("Gym not found", 404);
  }
  return gym;
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


module.exports={createGymService,getAllGymService,getGymServiceById,updateGymService,deleteGymService}
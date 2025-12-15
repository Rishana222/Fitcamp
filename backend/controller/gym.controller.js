const { ErrorHandler } = require('../handlers/errorHandler');
const {
  createGymService, getAllGymService, getGymServiceById, updateGymService, deleteGymService, getGymsByLocationService } = require('../services/gym.service');

const GymCreateController = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.image = req.file.path;
    } else {
      return res.status(400).json({ message: "image is required" });
    }

    const gym = await createGymService(data);
    return res.status(201).json(gym);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const GymGetController = async (req, res) => {
  try {
    const gyms = await getAllGymService();
    return res.status(200).json(gyms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};



const GymGetByIdController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new ErrorHandler("id is required", 400);
    }

    const gym = await getGymServiceById(id);
    return res.status(200).json(gym);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


const GymGetByLocationController = async (req, res) => {
  try {
    const { locationId } = req.params;

    if (!locationId) {
      throw new ErrorHandler("locationId is required", 400);
    }

    const gyms = await getGymsByLocationService(locationId);
    return res.status(200).json({ success: true, data: gyms });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};


  

const GymUpdateController = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    if (req.file) {
      update.image = req.file.path;
    }

    if (!id) {
      throw new ErrorHandler("id is required", 400);
    }

    const updatedGym = await updateGymService(id, update);
    return res.status(200).json({
      success: true,
      message: "Gym updated successfully",
      data: updatedGym,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

const GymDeleteController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      throw new ErrorHandler("id is required", 400);
    }

    const deletedGym = await deleteGymService(id);
    return res.status(200).json({
      success: true,
      message: "Gym deleted successfully",
      data: deletedGym,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  GymCreateController,
  GymGetController,
  GymGetByIdController,
  GymUpdateController,
  GymDeleteController, GymGetByLocationController
};

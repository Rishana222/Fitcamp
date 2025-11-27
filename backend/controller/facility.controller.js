const { ErrorHandler } = require('../handlers/errorHandler');
const { createFacilityService,getFacilityService,updateFacilityService,deleteFacilityService} = require('../services/facility.service');

const FacilityCreateController = async (req, res) => {
  try {
    const data = req.body;

    if (!req.files['image'] || req.files['image'].length === 0) {
      return res.status(400).json({ message: "Main image required" });
    }
    data.image = req.files['image'][0].filename;

    if (req.files['icons'] && req.files['icons'].length > 0) {
      data.icons = req.files['icons'].map(f => f.filename);
    }

    const facility = await createFacilityService(data);
    return res.status(201).json({ success: true, data: facility, message: "Facility created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const FacilityGetController = async (req, res) => {
  try {
    const facilities = await getFacilityService();
    return res.status(200).json({ success: true, data: facilities });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const FacilityUpdateController = async (req, res) => {
    try {
        const id = req.params.id;
        const updated = req.body;

        if (!id) {
            throw new ErrorHandler('ID is required', 400);
        }

        const updatedFacility = await updateFacilityService(id, updated);

        return res.status(200).json({ 
            success: true, 
            message: 'Facility updated successfully', 
            data: updatedFacility 
        });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

const FacilityDeleteController = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw new ErrorHandler('ID is required', 400);
        }

        const deletedFacility = await deleteFacilityService(id);

        return res.status(200).json({ 
            success: true, 
            message: 'Facility deleted successfully', 
            data: deletedFacility 
        });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { 
    FacilityCreateController, 
    FacilityGetController, 
    FacilityUpdateController, 
    FacilityDeleteController 
};
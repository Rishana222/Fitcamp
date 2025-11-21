const Facility = require('../models/facilityModel');
const { ErrorHandler } = require('../handlers/errorHandler');

const createFacilityService = async (data) => {
    const facility = new Facility(data);
    return await facility.save();
};

const getFacilityService = async () => {
    return await Facility.find();
};

const updateFacilityService = async (id, updated) => {
    const existingFacility = await Facility.findById(id);
    if (!existingFacility) {
        throw new ErrorHandler('Facility not found', 404);
    }

    const updatedFacility = await Facility.findByIdAndUpdate(id, updated, { new: true });
    return updatedFacility;
};

const deleteFacilityService = async (id) => {
    const existingFacility = await Facility.findById(id);
    if (!existingFacility) {
        throw new ErrorHandler('Facility not found', 404);
    }

    const deletedFacility = await Facility.findByIdAndDelete(id);
    return deletedFacility;
};

module.exports = { 
    createFacilityService, 
    getFacilityService, 
    updateFacilityService, 
    deleteFacilityService 
};
const { ErrorHandler } = require('../handlers/errorHandler')
const { createFacilityService, getFacilityService, updateFacilityService, deleteFacilityService } = require('../services/facility.service')

const FacilityCreateController = async (req, res) => {
  try {
    const facility = await createFacilityService(req.body)
    return res.status(201).json(facility)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const FacilityGetController = async (req, res) => {
  try {
    const facilities = await getFacilityService()
    return res.status(200).json(facilities)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const FacilityUpdateController = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = req.body;
    if (!id) {
      throw new ErrorHandler('id is required', 400)
    }
    const updatedFacility = await updateFacilityService(id, updated, { new: true })
    return res.status(200).json({ success: true, message: 'user updated successfully', data: updatedFacility })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}

const FacilityDeleteController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new ErrorHandler('id is required', 400)
    }
    const deletedFacility = await deleteFacilityService(id);
    return res.status(200).json({ success: true, message: 'facility deleted successfully', data: deletedFacility })
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message })
  }
}
module.exports = { FacilityCreateController, FacilityGetController, FacilityUpdateController, FacilityDeleteController }
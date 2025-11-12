const { createFacilityService, getFacilityService, updateFacilityService,deleteFacilityService } = require('../services/facility.service')

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
    const updated = await updateFacilityService(req.params.id, req.body)
    if (!updated)
      return res.status(404).json({ message: 'Facility not found' })
    return res.status(200).json(updated)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const FacilityDeleteController = async (req,res)=>{
    try {
       const deleted = await deleteFacilityService(req.params.id,req.body) 
       if (!deleted) return res.status(404).json({ message: 'Facility not found' })
         return res.status(200).json({ message: 'Deleted successfully' })
    } catch (error) {
      return res.status(400).json({ message: error.message })  
    }
}
module.exports = { FacilityCreateController, FacilityGetController,FacilityUpdateController,FacilityDeleteController }
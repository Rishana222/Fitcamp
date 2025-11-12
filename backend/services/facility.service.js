const Facility = require('../models/facilityModel')

const createFacilityService = async (data) => {
    const facility = new Facility(data)
    return await facility.save()
}

const getFacilityService = async () => {
    return await Facility.find()
}
const updateFacilityService = async (id, data) => {
    return await Facility.findByIdAndUpdate(id, data, { new: true })
}

const deleteFacilityService = async (id) => {
  return await Facility.findByIdAndDelete(id)
}

module.exports = { createFacilityService, getFacilityService, updateFacilityService,deleteFacilityService }
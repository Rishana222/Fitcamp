const Facility = require('../models/facilityModel')
const {ErrorHandler} = require ('../handlers/errorHandler')

const createFacilityService = async (data) => {
    const facility = new Facility(data)
    return await facility.save()
}

const getFacilityService = async () => {
    return await Facility.find()
}

const updateFacilityService = async (id,updated)=>{
    if(!id)
        throw new ErrorHandler('invalid id')
    const update = await Facility.findByIdAndUpdate(id,updated,{new:true})
    if(!update)
        throw new ErrorHandler('facility not found')
    return update

}
const deleteFacilityService = async (id)=>{
    if(!id)
        throw new ErrorHandler('id required')
    const deleted = await Facility.findByIdAndDelete(id)
    return deleted
}

module.exports = { createFacilityService, getFacilityService, updateFacilityService,deleteFacilityService }
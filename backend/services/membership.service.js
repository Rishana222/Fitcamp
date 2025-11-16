const Membership = require('../models/membershipModel')
const { ErrorHandler } = require('../handlers/errorHandler')
const membership = require('../models/membershipModel')

const createMembershipService = async (data) => {
    const membershipModel = new Membership(data)
    return await membershipModel.save()
}

const getMembershipService = async () => {
    return await Membership.find()
}

const getAllMembershipService = async (id)=>{
 const membership= await Membership.findById(id)
 if(!membership){
    throw new ErrorHandler('Membership not found',404)
 }
 return membership
}

const updateMembershipService = async (id, updatedData) => {
    const existingMembership = await Membership.findById(id);
    if (!existingMembership) {
        throw new ErrorHandler('Membership not found', 404);
    }
    const updatedMembership = await Membership.findByIdAndUpdate(  id,updatedData, { new: true } );
     return updatedMembership;
}; 

const deleteMembershipService = async (id) => {
  const existingMembership = await Membership.findById(id);
  if (!existingMembership){
    throw new ErrorHandler('membership not found',404)
  }
  const membership= await Membership.findByIdAndDelete(id)
  return membership
}

module.exports = { createMembershipService, getMembershipService, getAllMembershipService, updateMembershipService, deleteMembershipService }
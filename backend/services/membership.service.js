const Membership = require('../models/membershipModel')
const { ErrorHandler } = require('../handlers/errorHandler')

const createMembershipService = async (data) => {
    const membershipModel = new Membership(data)
    return await membershipModel.save()
}

const getMembershipService = async () => {
    return await Membership.find()
}

const getAllMembershipService = async (id)=>{
  if(!id) return null
  const membership = await Membership.findById(id)
  return membership
}

const updateMembershipService = async (id, updated) => {
    if (!id)
        throw new ErrorHandler('invalid membership id')
    const update = await Membership.findByIdAndUpdate(id, updated, { new: true })
    if (!update)
        throw new ErrorHandler('membership ot found')
    return update
}

const deleteMembershipService = async (id) => {
    if (!id)
        throw new ErrorHandler('user id is required')
    const deleted = await Membership.findByIdAndDelete(id)
    return deleted
}

module.exports = { createMembershipService, getMembershipService, getAllMembershipService, updateMembershipService, deleteMembershipService }
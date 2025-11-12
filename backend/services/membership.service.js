const Membership = require ('../models/membershipModel')

const createMembershipService = async (data)=>{
    const membershipModel = new Membership(data)
    return await membershipModel.save()
}

const getMembershipService = async ()=>{
    return await Membership.find()
}

const getAllMembershipService = async (id)=>{
    return await Membership.findById(id)
}

const updateMembershipService = async (id,updates)=>{
    return await Membership.findByIdAndUpdate(id,updates,{new:true})
}

const deleteMembershipService = async (id)=>{
    return await Membership.findByIdAndDelete(id)
}

module.exports={createMembershipService,getMembershipService,getAllMembershipService,updateMembershipService,deleteMembershipService}
const Membership = require('../models/membershipModel')
const { createMembershipService, getMembershipService, getAllMembershipService, updateMembershipService, deleteMembershipService } = require('../services/membership.service')

const membershipCreateController = async (req, res) => {
    try {
        const membership = await createMembershipService(req.body);
        return res.status(201).json(membership);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const membershipGetController = async (req, res) => {
    try {
        const memberships = await getMembershipService()
        return res.status(200).json(memberships)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const membershipGetByIdController = async (req, res) => {
    try {
        const id = req.params.id
      if (!id){
        throw new ErrorHandler('ID is required',400)
      }
      const membership= await getAllMembershipService(id)
      return  res.status(200).json({success: true, data: membership})
    } catch (error) {
    return res.status(400).json({success: false,message: error.message });
    }
}

const membershipUpdateController = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    if(!id){
        throw new ErrorHandler('ID is required',400)
    }   
    const updatedMembership = await updateMembershipService(id,updateData);
    res.status(200).json({success: true, message: "Membership updated successfully", data: updatedMembership})
  } catch (error) {
    return res.status(400).json({success: false,message: error.message }); 
  }
}

const membershipDeleteController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
        throw new ErrorHandler("ID is required", 400);
    }
    const deletedMembership = await deleteMembershipService(id);

    res.status(200).json({ success: true, message: 'Membership deleted successfully', data: deletedMembership
     });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = { membershipCreateController, membershipGetController, membershipGetByIdController, membershipUpdateController,membershipDeleteController }

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
        const membership = await getAllMembershipService(req.params.id);
        if (!membership)
            return res.status(404).json({ message: 'Membership not found' });
        return res.status(200).json(membership)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const membershipUpdateController = async (req, res) => {
    try {
        const updated = await updateMembershipService(req.params.id, req.body)
        if (!updated)
            return res.status(404).json({ message: 'Membership not found' })
        return res.status(200).json(updated)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const membershipDeleteController = async (req, res) => {
    try {
        const deleted = await deleteMembershipService(req.params.id)
        if (!deleted)
            return res.status(404).json({ message: 'Membership not found' })
        return res.status(200).json({message:'Membership deleted successfully'})
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = { membershipCreateController, membershipGetController, membershipGetByIdController, membershipUpdateController,membershipDeleteController }

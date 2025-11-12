const { createGymLocationService, getGymLocationService, updateGymLocationService, deleteGymLocationService } = require('../services/gymLocation.service')

const GymLocationCreateController = async (req, res) => {
    try {
        const gymLocation = await createGymLocationService(req.body)
        return res.status(201).json(gymLocation)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const GymLocationGetController = async (req,res) => {
    try {
        const gyms = await getGymLocationService()
        return res.status(200).json(gyms)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const GymLocationUpdateController = async (req, res) => {
    try {
        const updated = await updateGymLocationService(req.param.id, req.body)
        return res.status(200).json(updated)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const GymLocationDeleteController = async (req,res) => {
    try {
        await deleteGymLocationService(req.params.id)
        return res.json({ message: 'Deleted successfully' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}



module.exports = { GymLocationCreateController, GymLocationGetController, GymLocationUpdateController, GymLocationDeleteController }
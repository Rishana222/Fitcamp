const mongoose = require('mongoose')
const subscribeSchema = new mongoose.Schema({
    membershipId: {
        type: String,
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "expired"]
    }
})
const subscribe = mongoose.model('subscribe', subscribeSchema)
module.exports = subscribe
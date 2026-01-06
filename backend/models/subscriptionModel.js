const mongoose = require('mongoose')
const subscribeSchema = new mongoose.Schema({
    membershipName: {
        type: String,
    },
    desc:{
        type:String
    },
    amount:{
        type:String
    },
    duration:{
        type:String
    },
     features: [
        {
            type: String
        }
    ],
    status: {
        type: String,
        enum: ["active", "inactive"]
    }
})
const subscribe = mongoose.model('subscribe', subscribeSchema)
module.exports = subscribe
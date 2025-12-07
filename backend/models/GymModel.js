const mongoose = require('mongoose')
const gymSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
        default: null
    },
    image:{
        type: String,
        default: null
    },
    gymLocation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'gymLocation',
        required:true
    },
    facilities:[
        {
            type: mongoose.Schema.Types.ObjectId,
        ref:'facility',
       
        }
    ]


})

const Gym = mongoose.model('Gym', gymSchema)
module.exports = Gym
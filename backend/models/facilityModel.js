const mongoose = require('mongoose')
const facilitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
})

const facility = mongoose.model('facility',facilitySchema)
const mongoose = require ('mongoose')
const membershipSchema = new mongoose.Schema({
        planName:{
            type:String,
            required:true,
            trim:true
        },
        durationMonths:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        features:{
            type:String
        }
        
})
const membership = mongoose.model('membership',membershipSchema)
module.exports= membership
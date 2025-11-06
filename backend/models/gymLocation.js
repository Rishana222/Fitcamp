const mongoose = require('mongoose')
const gymLocationSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
        unique:true,
        trim:true
     },
     cardImage:{
        type:String,
        required:true
     }
     
})

const gymLocation = mongoose.model('gymLocation',gymLocationSchema)
module.exports=gymLocation
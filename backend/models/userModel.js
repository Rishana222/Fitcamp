const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    user_type:{
        type:String,
        enum:['admin','customer'],
        default:"customer"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    
})

const User = mongoose.model("user", userSchema)
module.exports = User
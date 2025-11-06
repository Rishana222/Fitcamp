const mongoose = require ('mongoose')
const subscribeSchema = new mongoose.Schema({
    userId:{
        
    }
})
const subscribe = mongoose.model('subscribe',subscribeSchema)
module.exports= subscribe
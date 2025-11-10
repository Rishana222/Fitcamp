const mongoose = require('mongoose')
const facilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    icons: {
        type: Array,
        required: true
    }
})

const facility = mongoose.model('facility', facilitySchema)
module.exports = facility
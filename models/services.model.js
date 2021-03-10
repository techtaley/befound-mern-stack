const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
        url: {type: String, required: true},
        name: {type: String, required: true},
        desc: {type: String, required: true},
        date: {type: Date, default: Date.now}      
})

module.exports = mongoose.model('service', servicesSchema)
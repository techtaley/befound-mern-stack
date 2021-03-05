const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    servicetitle: {type: String, required: true},  
    servicedesc: {type: String, required: true},
    date: {type: Date, default: Date.now}      
})

module.exports = mongoose.model('service', serviceSchema)
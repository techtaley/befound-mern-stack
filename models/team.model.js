const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
        url: {type: String, required: true},
        name: {type: String, required: true},
        title: {type: String, required: true},
        date: {type: Date, default: Date.now}      
})

module.exports = mongoose.model('team', teamSchema)
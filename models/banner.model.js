const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema({
        url: {type: String, required: true},
        title: {type: String, required: true},
        desc: {type: String, required: true},
        link: {type: String, required: true},                  
        date: {type: Date, default: Date.now}      
})

module.exports = mongoose.model('banner', bannerSchema)
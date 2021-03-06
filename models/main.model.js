const mongoose = require('mongoose')

const mainSchema = new mongoose.Schema({
    firstquote: {type: String, required: false},
    secondquote: {type: String, required: false},
    abouturl: {type: String, required: true},
    aboutname: {type: String, required: true},
    abouttitle: {type: String, required: true},
    aboutdesc: {type: String, required: true},
    videoposter: {type: String, required: true},
    videourl: {type: String, required: true},
    videodesc: {type: String, required: true},
    videosource: {type: String, required: true},
    contacturl: {type: String, required: true},
    date: {type: Date, default: Date.now}        
})

module.exports = mongoose.model('main', mainSchema)
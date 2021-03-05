const mongoose = require('mongoose')

// const bannerSchema = new mongoose.Schema({                
//         bannerurl: {type: String, required: true},
//         bannertitle: {type: String, required: true},
//         bannerdesc: {type: String, required: true},
//         bannerlink: {type: String, required: true},                
// })

const templateSchema = new mongoose.Schema({
        // banner: [bannerSchema],
        firstquote: {type: String, required: false},
        secondquote: {type: String, required: false},
        abouturl: {type: String, required: true},
        aboutname: {type: String, required: true},
        abouttitle: {type: String, required: true},
        aboutdesc: {type: String, required: true},
        servicetitle: {type: String, required: true},  
        servicedesc: {type: String, required: true},
        videoposter: {type: String, required: true},
        videourl: {type: String, required: true},
        videodesc: {type: String, required: true},
        videosource: {type: String, required: true},
        contacturl: {type: String, required: true},
        date: {type: Date, default: Date.now}  
})

module.exports = mongoose.model('befound-table', templateSchema)
const mongoose = require('mongoose')

const befoundSchema = new mongoose.Schema({
        bannerurl: {type: String, required: true},
        bannertitle: {type: String, required: true},
        bannerdesc: {type: String, required: true},
        bannerlink: {type: String, required: true},                
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

module.exports = mongoose.model('befound-rest-api', befoundSchema)


// const contactSchema = new mongoose.Schema({ 
//         contacturl: {type: String, required: true},
// })

// const videoSchema = new mongoose.Schema({  
//         videoposter: {type: String, required: true},
//         videourl: {type: String, required: true},
//         videodesc: {type: String, required: true},
//         videosource: {type: String, required: true},
//         contact: [contactSchema]
// })

// const servicesSchema = new mongoose.Schema({ 
//         servicestitle: {type: String, required: true},
//         servicesdesc: {type: String, required: true},
//         video: [videoSchema]
// })

// const aboutSchema = new mongoose.Schema({
//         abouturl: {type: String, required: true},
//         aboutname: {type: String, required: true},
//         abouttitle: {type: String, required: true},
//         aboutdesc: {type: String, required: true},
//         services: [servicesSchema]
// })

// const quotesSchema = new mongoose.Schema({
//         firstquote: {type: String, required: false},
//         secondquote: {type: String, required: false},
//         about: [aboutSchema]
// })

// const bannerSchema = new mongoose.Schema({                
//         bannerurl: {type: String, required: true},
//         bannertitle: {type: String, required: true},
//         bannerdesc: {type: String, required: true},
//         bannerlink: {type: String, required: true},                
//         quotes: [quotesSchema]
// })

// const befoundSchema = new mongoose.Schema({
//         date: {type: Date, default: Date.now},
//         banner: [bannerSchema]
// })

//**Broke down components */

// const bannerSchema = new mongoose.Schema({
//         bannerurl: {type: String, required: true},
//         bannertitle: {type: String, required: true},
//         bannerdesc: {type: String, required: true},
//         bannerlink: {type: String, required: true}    
// })

// module.exports = mongoose.model('befound-banner-api', bannerSchema)

// const mainSchema = new mongoose.Schema({            
//         firstquote: {type: String, required: false},
//         secondquote: {type: String, required: false},
//         abouturl: {type: String, required: true},
//         aboutname: {type: String, required: true},
//         abouttitle: {type: String, required: true},
//         aboutdesc: {type: String, required: true},
//         videoposter: {type: String, required: true},
//         videourl: {type: String, required: true},
//         videodesc: {type: String, required: true},
//         videosource: {type: String, required: true},
//         contacturl: {type: String, required: true},
//         date: {type: Date, default: Date.now}
// })

// module.exports = mongoose.model('befound-main-api', mainSchema)

// const servicesSchema = new mongoose.Schema({
//         servicetitle: {type: String, required: true},  
//         servicedesc: {type: String, required: true}
// })

// module.exports = mongoose.model('befound-services-api', befoundSchema)

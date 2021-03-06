const express = require("express")
const router = express.Router()
const Main = require("../models/main.model")

router.post("/form", async (req, res) => {
    //results.push({...servicesInstance}) - try this here instead of bottom
    const mainInstance = new Main({ 
        firstquote: req.body.firstquote,
        secondquote: req.body.secondquote,  
        abouturl: req.body.abouturl,
        aboutname: req.body.aboutname,
        abouttitle: req.body.abouttitle,
        aboutdesc: req.body.aboutdesc, 
        videoposter: req.body.videoposter,  
        videourl: req.body.videourl,
        videodesc: req.body.videodesc,
        videosource: req.body.videosource,
        contacturl: req.body.contacturl
    })

    mainInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${mainInstance} added to the database`) 
    results.push(mainInstance)  
})

//to see data as and endpoint
router.get('/results', (req, res) => {
    Main.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

module.exports = router
const express = require("express")
const router = express.Router()
const Main = require("../models/main.model")

//CREATE 1) new main instance from form, 2) save and send to db

router.post("/", async (req, res) => {
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
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Main.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//RETRIEVE - find data by id from database
router.get('/:id', (req, res) => {
    Main.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.post('/update/:id', (req, res) => {
    Main.findById(req.params.id)
    .then(data => {
        data.firstquote = req.body.firstquote,
        data.secondquote = req.body.secondquote,  
        data.abouturl = req.body.abouturl,
        data.aboutname = req.body.aboutname,
        data.abouttitle = req.body.abouttitle,
        data.aboutdesc = req.body.aboutdesc, 
        data.videoposter = req.body.videoposter,  
        data.videourl = req.body.videourl,
        data.videodesc = req.body.videodesc,
        data.videosource = req.body.videosource,
        data.contacturl = req.body.contacturl

        data.save()
            .then(data => res.status.json(data))
            .catch(err => res.status(409).json(err))
    })
    .catch(err => res.status(409).json(err))
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', (req, res) => {
    Main.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})


module.exports = router
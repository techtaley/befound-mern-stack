const express = require("express")
const router = express.Router()
const Banner = require("../models/banner.model")

//CREATE 1) new banner instance from form, 2) save and send to db
router.post("/", async (req, res) => {
    const bannerInstance = new Banner({ 
        url: req.body.url,
        title: req.body.title,
        desc: req.body.desc,
        link: req.body.link
    })

    bannerInstance.save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Banner.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//RETRIEVE - find data by id from database
router.get('/:id', (req, res) => {
    Banner.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.post('/update/:id', (req, res) => {
    Banner.findById(req.params.id)
    .then(data => {
        data.url = req.body.url,
        data.title = req.body.title,
        data.desc = req.body.desc,
        data.link = req.body.link

        data.save()
            .then(data => res.status.json(data))
            .catch(err => res.status(409).json(err))

    })
    .catch(err => res.status(409).json(err))
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', (req, res) => {
    Banner.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})


module.exports = router
const express = require("express")
const router = express.Router()
const Services = require("../models/services.model")

//CREATE 1) new services instance from form, 2) save and send to db
router.post("/", async (req, res) => {
    const servicesInstance = new Services({ 
        url: req.body.url,
        name: req.body.name,
        desc: req.body.desc,
    })

    servicesInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${servicesInstance} added to the database`) 
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Services.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

//RETRIEVE - find data by id from database
router.get('/:id', (req, res) => {
    Services.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.post('/update/:id', (req, res) => {
    Services.findById(req.params.id)
    .then(data => {
        data.url = req.body.url,
        data.name = req.body.mname,  
        data.desc = req.body.desc,

        data.save()
            .then(data => res.status.json(data))
            .catch(err => res.status(409).json(err))
    })
    .catch(err => res.status(409).json(err))
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', (req, res) => {
    Services.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})


module.exports = router
const express = require("express")
const router = express.Router()
const Services = require("../models/services.model")

router.post("/form", async (req, res) => {
    //results.push({...servicesInstance}) - try this here instead of bottom
    const servicesInstance = new Services({ 
        url: req.body.url,
        name: req.body.name,
        desc: req.body.desc,
    })

    servicesInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${servicesInstance} added to the database`) 
    results.push(servicesInstance)  
})

//to see data as and endpoint
router.get('/results', (req, res) => {
    Services.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

module.exports = router
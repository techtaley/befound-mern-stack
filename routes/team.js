const express = require("express")
const router = express.Router()
const Team = require("../models/team.model")

router.post("/form", async (req, res) => {
    //results.push({...servicesInstance}) - try this here instead of bottom
    const teamInstance = new Team({ 
        url: req.body.url,
        name: req.body.name,
        title: req.body.title,
    })

    teamInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${teamInstance} added to the database`) 
    results.push(teamInstance)  
})

//to see data as and endpoint
router.get('/results', (req, res) => {
    Team.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

module.exports = router
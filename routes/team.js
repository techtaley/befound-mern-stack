const express = require("express")
const router = express.Router()
const Team = require("../models/team.model")

//CREATE 1) new tea, instance from form, 2) save and send to db
router.post("/", async (req, res) => {
    const teamInstance = new Team({ 
        url: req.body.url,
        name: req.body.name,
        title: req.body.title,
    })

    teamInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${teamInstance} added to the database`) 
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Team.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

//RETRIEVE - find data by id from database
router.get('/:id', (req, res) => {
    Team.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.post('/update/:id', (req, res) => {
    Team.findById(req.params.id)
    .then(data => {
        data.url = req.body.url,
        data.name = req.body.name,  
        data.title = req.body.title

        data.save()
            .then(data => res.status.json(data))
            .catch(err => res.status(409).json(err))
    })
    .catch(err => res.status(409).json(err))
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', (req, res) => {
    Team.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})


module.exports = router
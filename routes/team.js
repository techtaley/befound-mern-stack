const express = require("express")
const router = express.Router()
const Team = require("../models/team.model")

//const auth = require('./middleware/auth')
const auth = require('./auth')

//CREATE 1) new tea, instance from form, 2) save and send to db
router.post('/', auth, async (req, res) => {
    const teamInstance = new Team({ 
        url: req.body.url,
        name: req.body.name,
        title: req.body.title,
    })

    teamInstance.save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))

    //res.send(`${teamInstance} added to the database`) 
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Team.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//RETRIEVE - find data by id from database
router.get('/:id', auth, (req, res) => {
    Team.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.put('/update', auth, async (req,res) => {
    const newName = req.body.newName
    const newUrl = req.body.newUrl
    const newTitle = req.body.newTitle
    const id = req.body.id

    try {
        await Team.findById(id, (err, updatedTeam) => {
            updatedTitle.url = newUrl
            updatedTitle.name = newName;
            updatedTitle.title = newTitle;
            updatedTitle.save()
            res.send('update')
        })
    } catch(err) {
        console.log(err)
    }  
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', auth, (req, res) => {
    Team.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

module.exports = router
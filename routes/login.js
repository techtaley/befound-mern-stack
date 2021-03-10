const express = require("express")
const router = express.Router()
const Login = require("../models/login.model")
//const bcrypt = require("bcrypt")

//CREATE 1) new user instance from form, 2) save and send to db
router.post("/", async (req, res) => {

    // const saltPassword = await bycrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const loginInstance = new Login({ 
        username: req.body.username,
        password: req.body.password
        //password: securePassword,
    })

    loginInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${loginInstance} added to the database`) 
})

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/', (req, res) => {
    Login.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})

//RETRIEVE - find data by id from database
router.get('/:id', (req, res) => {
    Login.findById(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//UPDATE - 1) find data by id from database, 2) update existing field and then 3) save
router.post('/update/:id', (req, res) => {
    Login.findById(req.params.id)
    .then(data => {
        data.username = req.body.username,
        data.password = req.body.password,  

        data.save()
            .then(data => res.status.json(data))
            .catch(err => res.status(409).json(err))
    })
    .catch(err => res.status(409).json(err))
})

//DELETE - 1) find data by id from database, and 2) delete
router.delete('/:id', (req, res) => {
    Login.findByIdAndDelete(req.params.id)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})


module.exports = router
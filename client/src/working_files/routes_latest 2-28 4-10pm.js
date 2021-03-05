const express = require("express")
const router = express.Router()
const modelCopy = require("../models/models")

router.post("/form", async (req, res) => {
    const data = req.body
    //results.push({...modelInstance})  //try this here instead of bottom
    const modelInstance = new modelCopy(data)

    //.save
    modelInstance.save()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error =>{
        res.status(500).json('message', error)
    })

    res.send(`${modelInstance} added to the database`) 
    results.push(modelInstance)  

})

//to see data as and endpoint
router.get('/results', (req, res) => {
    modelCopy.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        })
})

module.exports = router
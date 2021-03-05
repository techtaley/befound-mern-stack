const express = require("express")
const router = express.Router()
const servicesModelCopy = require("../models/servicesModel")

router.post("/servicesForm", async (request, response) => {
    //results.push({...modelInstance}) - try this here instead of bottom
    const servicesModelInstance = new servicesModelCopy({ 
        url: request.body.url,
        title: request.body.title,
        desc: request.body.desc,
        link: request.body.link
    })

    servicesModelInstance.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

    response.send(`${servicesModelInstance} added to the database`) 
    results.push(servicesModelInstance)  

})

//to see data as and endpoint
router.get('/services', (req, res) => {
    servicesModelCopy.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        })
})


module.exports = router
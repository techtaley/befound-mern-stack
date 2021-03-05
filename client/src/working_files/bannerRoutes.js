const express = require("express")
const router = express.Router()
const bannerModelCopy = require("../models/bannerModel")

router.post("/bannerForm", async (request, response) => {
    //results.push({...modelInstance}) - try this here instead of bottom
    const bannerModelInstance = new bannerModelCopy({ 
        url: request.body.url,
        title: request.body.title,
        desc: request.body.desc,
        link: request.body.link
    })

    bannerModelInstance.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

    response.send(`${bannerModelInstance} added to the database`) 
    results.push(bannerModelInstance)  

})

//to see data as and endpoint
router.get('/bannerform', (req, res) => {
    bannerModelCopy.find({ })
        .then((data) => {
            console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        })
})


module.exports = router
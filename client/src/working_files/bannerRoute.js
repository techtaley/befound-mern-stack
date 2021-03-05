const express = require("express")
const router = express.Router()
const modelCopy = require("../models/models")

//get results from ...api/form, save as an instance, display on ...api/results
router.post("/bannerform", async (request, response) => {
    const bannerInstance = new modelCopy({ 
        url: request.body.url,
        title: request.body.title,
        desc: request.body.desc,
        link: request.body.link
    })

    bannerInstance.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

    response.send(`${bannereInstance} added to the database`) 
    results.push(bannerInstance)  

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
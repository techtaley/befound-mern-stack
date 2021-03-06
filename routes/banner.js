const express = require("express")
const router = express.Router()
const Banner = require("../models/banner.model")

router.post("/form", async (req, res) => {
    //results.push({...bannerInstance}) - try this here instead of bottom
    const bannerInstance = new Banner({ 
        url: req.body.url,
        title: req.body.title,
        desc: req.body.desc,
        link: req.body.link
    })

    bannerInstance.save()
    .then(data => res.json(data))
    .catch(err => res.json(err))

    res.send(`${bannerInstance} added to the database`) 
    results.push(bannerInstance)  

})

//to see data as and endpoint
router.get('/results', (req, res) => {
    Banner.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json('error: ', err))
})


module.exports = router
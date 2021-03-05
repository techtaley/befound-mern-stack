const express = require("express")
const router = express.Router()
const modelCopy = require("../models/models")

//post data to db from form input (req.body)
router.post("/form", async (req, res) => {
    const data = req.body
    const modelInstance = new modelCopy(data)

    modelInstance.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })

    // try {
    //     await newData.save()    
    //     //200x successful
    //     res.status(201).json(newData)
    //     //400x client error
    // } catch(error) {
    //     res.status(409).json({message: error.message})
    // }

    res.send(`${modelInstance} added to the database`) 
    results.push(modelInstance)      
})

// //get data from db to api/result page
router.get('/results', (req, res) => {
    modelCopy.find()
        .then((data) => {
            console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        })
})

// //get data from db to api/result page
// router.get("/results", async(req, res) => {
//     try{
//         const modelInstance = await modelCopy.find()
//         res.status(201).json(modelInstance)
//     } catch(error) {
//         res.status(409).json({ message: error.message })
//     }
// })  



module.exports = router 


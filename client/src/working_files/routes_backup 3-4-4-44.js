const express = require("express")
const router = express.Router()
const modelCopy = require("../models/models")


//post data to db from form input (req.body)
router.post("/form", async (req, res) => {
    const data = req.body
    const modelInstance = new modelCopy(data)

    modelInstance.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })

response.send(`${modelInstance} added to the database`) 
results.push(modelInstance)      
})

//post data to db from form input (req.body)
// router.post("/bannerform", async (request, response) => {
//     const data = request.body
//     const bannerInstance = new modelCopy(data)    

//     bannerInstance.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })

//     response.send(`${bannerInstance} added to the database`) 
//     results.push(bannerInstance)  

// })

// //post data to db from form input (req.body)
// router.post("/mainform", async (request, response) => {
//     const data = request.body
//     const mainInstance = new modelCopy(data)    

//     mainInstance.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })

//     response.send(`${mainInstance} added to the database`) 
//     results.push(mainInstance)  
// })

// router.post("/form", async (request, response) => {
//     const data = request.body
//     const teamInstance = new modelCopy(data)    

//     teamInstance.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })

//     response.send(`${teamInstance} added to the database`) 
//     results.push(teamInstance)  

// })

// router.post("/form", async (request, response) => {
//     const data = request.body
//     const servicesInstance = new modelCopy(data)    

//     servicesInstance.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })

//     response.send(`${servicesInstance} added to the database`) 
//     results.push(servicesInstance)  

// })

//to see data as an endpoint on results page
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

//'save' is where React will send the resuls - 
//when the server receives a request on 'save' route we will console.log req.body and 

// router.post('/save', (req, res) => {
//     console.log('Body: ', req.body)
//     // const data = {
//     //     url: 'url test',
//     //     title: 'title test',
//     //     desc: 'desc test',
//     //     link: 'link test'

//     // }
//     //res.json({data})
//     res.json({
//         msg: "We received your details"
//     })
// })

// getData.get('/results', (req, res) => {
//     const data = {
//         url: 'http://www.expansivedesigns.com',
//         title: 'website title',
//         desc: 'website desc',
//         link: 'website link'    
//         // url: request.body.url,
//         // title: request.body.title,
//         // desc: request.body.desc,
//         // link: request.body.link        
//     }
//     res.json(data)
// })


// the routes uses the model to move and remove data to/from db

// router.post('/save', (req, res) => {
//     console.log('Body: ', req.body )

//     const data = {
//         url: 'http://www.expansivedesigns.com',
//         title: 'website title',
//         desc: 'website desc',
//         link: 'website link'
//     }

//     res.json({
//         msg: 'We received your data!'
//     })
// })

// router.get('/name', (req, res) => {
//     const data = {
//         url: 'http://www.expansivedesigns.com',
//         title: 'website title',
//         desc: 'website desc',
//         link: 'website link'
//     }

//     res.json(data)
// })


//use completes form (post request made), post sent to router.post (post request made) and save in modelInstance



module.exports = router
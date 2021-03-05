const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors = require('cors')

const morgan = require('morgan')
const path = require('path')

//if 4000 is busy process.env.PORT says run on whatever port is available
const PORT = process.env.PORT || 4000  

//when is on /Form and submits the form it will go to the server 
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {   //use heroku's env variable      
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, () => console.log("Connected to mongoDB!"))
    } catch(err){
        console.error(err)
    }
}

connectDB()   

//if the production appication is set to heroku the give the entire build folder to the server
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

//app represents the server that listens for requests

//HTTP request logger
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use('/api', routesUrls)  // /urls in routesUrls will be appended to /server  /server/form
app.listen(PORT, () => console.log(`Server is up and running ${PORT}`))
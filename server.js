const express = require('express')
require('dotenv').config()

const app = express()  
const mongoose = require('mongoose')

const cors = require('cors')

const cookieParser = require('cookie-parser')

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
app.use(cookieParser())
app.use(cors({
    credentials: true,  //exchanges the cookies from BE to FE
    origin: ['http://localhost:3000']  //need port of FE
}))

app.get("/", (req, res) => res.send("Welcome to server for Befound.")) 


//server endpoints using routes
app.use('/api', require('./routes/routes'))  //pulls jwt routes from in routes.js 

app.use('/api/banner', require('./routes/banner'))  //these are regular routes
app.use('/api/services', require('./routes/services'))  
app.use('/api/team', require('./routes/team'))
app.use('/api/main', require('./routes/main')) 

app.use('/api/auth', require('./routes/auth'))  //auth route verifies move to next() which would be app.listen
        


/*  move to top
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.TOKEN_SECRET
*/

//8/16 Authentication routes 
//app.post("/api/login" 
//app.get("/api/user"
//app.post("/api/logout"
//app.delete("/api/user/:userId", verify)

//8/16 move const auth = async(req, res, next) => {  from auth.js to server.js

app.listen(PORT, () => console.log(`Server is up and running ${PORT}`))
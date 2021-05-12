//create user route and export to server
const express = require("express")
const router = express.Router()
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const jwtSecret = process.env.TOKEN_SECRET

//RETRIEVE all data from database and show on empty "/" route (endpoint)
router.get('/register', (req, res) => {
    User.find({ })
    .then(data => res.status(201).json(data))
    .catch(err => res.status(409).json(err))
})

//CREATE 1) new user instance from form, 2) save and send to db
router.post('/register', async (req, res) => {  
    //check database for existing user by email
    const existing = await User.findOne({ email: req.body.email })
    if(existing) return res.status(404).json({ message: "User already exisits." })

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //if all good this creates a newUser instance
    const user = new User({ 
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    }) 
    
    //save results of newUser instance in order to destructure
    const savedUser = await user.save()
    const { password, data } = await savedUser.toJSON()
    res.send(data)
    
    //res.send({userId: savedUser._id})  //just sends back user id
})  

//authenticate the user by username and password
router.post('/login', async (req, res) => { 
    const user = await User.findOne({ email: req.body.email })    
    if(!user) return res.status(404).json({ message: "User does not exist." })

    try {
        //compare entered password with stored password
        const valid = await bcrypt.compare(req.body.password, user.password)
        if(!valid) return res.status(404).json({message: "Invalid credentials."})

        //const token = jwt.sign({_id: user._id}, jwtSecret, {expiresIn: "30m"})
        const token = jwt.sign({_id: user._id}, jwtSecret)
        //res.headers('x-access-header', token).send(token)

        //token sent to browser and stored as a cookie and browers can validate it
        res.cookie('jwt', token, {
            httpOnly: true,  //httpOnly cookie stored in BE and sent to FE - more secure
            maxAge: 24 * 60 * 60 * 1000  //maxAge - 1 day, time in sections cookie will expire.  Best Practice 1 hour
        })  //*this only give us BE Httponly cookie -
        //need Cors due to different ports on FE & BE also
        //in order from FE to get it from BE need to set credentials: true

        //res.send(token) //don't res the  token
        res.send({ message: "Successfully authenticated." })             
        //res.send({userId: user._id}) //send user id             
        //res.send({username: user.username}) //send user id             
     } catch(err) {
         res.status(404).json({message: "Unauthenticated."})
     }
}) 

//Postman Testing - Simulates Authenticating user /routes/auth.js to set up real authentication

// gets the jwt cookie from BE via FE to get authenticated user
// decode cookie to it exists
router.get('/user', async (req, res) => {
    try {
        //const cookie = req.headers['x-access-header']  
        const cookie = req.cookies['jwt']
        //res.send(cookie) //Test Works!    
        const authenticate = jwt.verify(cookie, jwtSecret)     
        //res.send(authenticate)  //Test Works! - sends _id and iat

        //always use * _id
        const verified = await User.findOne({_id: authenticate._id})
        //res.send(user) //sends all data with password  
        res.send({_id: verified._id})  //only shows id

        //add verified user from payload
        //*****figure out how to add the verified use to the payload******

        req.user = verified      
        //another option: destructoring
        //const { password, ...data } = user.toJSON()    
        //res.send(data)  //data with no password
    } catch(err){
        return res.status(401).send({ message: 'Unauthenticated'}) 
    }   
})    

router.post('/logout', async (req, res) => {
    //token sent to browser and stored as a cookie
    res.cookie('jwt', '', {
        maxAge: 0  //maxAge - 1 day, time in sections cookie will expire.  Best Practice 1 hour
    })     
    //user has authenticated - send message not token or user (just these these)
    res.send({ message: "Logged out / Unauthenticated" })  //test send - actual!   
})

module.exports = router

const jwt = require('jsonwebtoken')
const jwtSecret = process.env.TOKEN_SECRET

// gets the jwt cookie from BE via FE to get authenticated user
// opposite of signing jwt - decode cookie to verify a cookie exists

 const auth = async(req, res, next) => {
    try {
        //const cookie = req.headers['x-access-header']  
        const cookie = req.cookies['jwt']
        //res.send(cookie) //Test Works!    

        if(!cookie) return res.status(401).send({ message: 'No cookie exists'}) 
        //res.send(cookie) //Test Works!  Cookie exisits  
        
        const authenticate = jwt.verify(cookie, jwtSecret)    
        //res.send(authenticate)  //Test Works! - sends _id and iat 

        //always use * _id
        const verified = await User.findOne({_id: authenticate._id})
        res.send(user) //sends all data with password  
        //res.send({_id: verified._id})  //only shows id

        //add verified user from payload
        //*****figure out how to add the verified use to the payload******

        req.user = verified      
        //res.send(user) //sends all data with password  
        //res.send({_id: user._id})  //only shows id

        //another option: destructoring
        //const { password, ...data } = user.toJSON()    
        //res.send(data)  //data with no password
    } catch(err){
        return res.status(401).send({ message: 'Unauthenticated'}) 
    } 
 }          
//    try {
//         const cookie = req.header['x-access-token']  
//         if(!cookie) return res.status(401).send({ message: 'No cookie found.' })

//         //if token, verify:
//         jwt.verify(token, jwtSecret, (err, decoded) => {
//             if(err) {
//                 res.status(401).send({message:  "No cookie found"})
//                 return 
//             } else {
//                 req._id = decoded._id
//                 //res.send(_id)
//                 next()  //calls next middleware
//             }
//         })
//     } catch(err){
//         return res.status(401).send({ message: 'Access denied.' })
//    } 
//}   

// const auth = (req, res, next) => {
//     try {
//         const cookie = req.cookie['jwt']  
//         if(!cookie) return res.status(401).send({ message: 'No cookie found.' })        

//         //if cookie, verify:
//         jwt.verify(cookie, jwtSecret, (err, decoded) => {
//             if(err) {
//                 res.status(401).send({message:  "Access denied."})
//                 return
//             } else {
//                 req._id = decoded._id
//                 res.send(_id)
//                 //res.send(decoded._id)
//                 next()  //calls next middleware
//             }
//         })
//     } catch(err){
//         res.status(401).send({ message: 'Access denied.' })
//    } 
// }

//  const auth = (req, res, next) => {
//     try {
//         //const cookie = req.headers['x-access-header']  
//         const cookie = req.cookie['jwt']  
//         //res.send(cookie)    //test to see if cookie exists - not working!

//         //if cookie exists, verify on backend
//         if(!cookie) return res.status(401).send({ message: 'No cookie found.' })

//         const verified = jwt.verify(cookie, jwtSecret)
//         //const verifiedUser = await User.findOne({_id: verified._id})
//         res.send(verified)

//         //add verified user from payload
//         req.user = verified

//         //calls next middleware
//         next()
//     } catch(err) {
//         return res.status(401).send({ message: 'Access denied.' })
//     } 
// }

module.exports = auth
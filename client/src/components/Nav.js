//import React, { useState } from 'react'
//import React from 'react'
import { Link } from "react-router-dom"
import '../../src/App.css' 
//import axios from 'axios'

export default function Nav(){
    // const [authorized, setAuthorized] = useState(false)
    //const [ redirect, setRedirect ] = useState(false)     
 
    // const handleClick = async(e) => {
    //     await axios.post('http://localhost:4000/api/logout', 
    //         {withCredentials: true}).then(res => {
    //             res.cookie('jwt', '', {
    //                 maxAge:  0  //maxAge - 1 day, time in sections cookie will expire.  Best Practice 1 hour
    //             })
            
    //             //user has authenticated - send message not token or user (just these these)
    //             res.send({ message: "Logged out / Unauthenticated" })  //test send - actual!
    //         })

    //         setAuthorized(true) 
    // }    

    return (
        <div className='navbar'>
            <div className='navbar-home'>
                <Link to={'/'} className='nav-link'>Home</Link>
            </div>
            <div className='navbar-login'>
                <Link to={'/app/login'} className='nav-link'>Login</Link>
                <Link to={'/app/logout'} className='nav-link'  
                    // onClick={handleClick}  
                    // value={authorized}
                >Logout</Link>
                <Link to={'/app/register'} className='nav-link'>Register</Link>
                <Link to={'/app/dashboard'} className='nav-link'>Dashboard</Link>                    
            </div>
        </div> 
    )
}
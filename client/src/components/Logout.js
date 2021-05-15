// import React from 'react'
// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
//import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css" 
//import axios from 'axios'
import '../../src/App.css'
import {Redirect } from 'react-router-dom'

//on submit valus from state stored in payload
export default function Logout(){
    const [ redirect, setRedirect ] = useState(false)     
 
    useEffect(() => {
        async function logoutUser(){
    //         //axios sends data to database from state
    //         await axios.get('http://localhost:4000/api/login', 
    //             {withCredentials: true}).then(res => {
    //         })

            setRedirect(true)
         }
        
         logoutUser()
    })    

 if(redirect) return <Redirect to="/app/login" />   

    return (
        <div className='container'>
            <div className="form-div">
            <h1>You are logged out!</h1>  
            <p className="login"><a href="/app/login">login</a></p>
            </div> 
        </div>
    )
}
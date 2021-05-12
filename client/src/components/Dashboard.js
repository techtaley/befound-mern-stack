import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import '../../src/App.css' 

export default function Dashboard() {
    const [ email, setEmail ] = useState('')

    //gets the authenticated logged in user
    useEffect(() => {
        async function getAuthUsers(){
            await axios.get('http://localhost:4000/api/register', {
                email: email
            }, {withCredentials: true}).then((res) => {
                const data = res.config
                setEmail(data.email)
                //console.log(data.config.data)
            }) 
        }
        
        getAuthUsers()
    })    

    return (
        <div>
            <div className='dashboard_navbar'>
                <Link to='/app/banner' className='nav-link'>Banner</Link>
                <Link to='/app/services' className='nav-link'>Services</Link>
                <Link to='/app/team' className='nav-link'>Team</Link>
                <Link to='/app/main' className='nav-link'>Main</Link>
            </div>
        </div>
    )
}


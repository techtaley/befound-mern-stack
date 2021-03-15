import React, { Component} from 'react'
import { Link } from "react-router-dom"
import '../../src/App.css' 

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <Link to='/' className='nav-link'>Dashboard</Link>
                <Link to='/banner' className='nav-link'>Banner</Link>
                <Link to='/services' className='nav-link'>Services</Link>
                <Link to='/team' className='nav-link'>Team</Link>
                <Link to='/main' className='nav-link'>Main</Link>
            </div> 
        )
    }
}
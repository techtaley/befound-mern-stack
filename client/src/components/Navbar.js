import React, { Component} from 'react'
//import { BrowswerRouter as Router, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css'
import '../../src/App.css' 

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <Link to='/login' className='nav-link'>Dashboard</Link>
                <Link to='/banner' className='nav-link'>Banner</Link>
                <Link to='/services' className='nav-link'>Services</Link>
                <Link to='/team' className='nav-link'>Team</Link>
                <Link to='/main' className='nav-link'>Main</Link>
            </div> 
        )
    }
}
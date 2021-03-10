import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Team from "./components/Team"   
import Main from "./components/Main"  

//on submit valus from state stored in payload
export default class App extends Component {
  render(){
    return(   
        <Router>
          <Navbar />
          <br />
              <Route path='/login' exact component={Login} />
              <Route path='/banner' component={Banner} />
              <Route path='/services' component={Services} />
              <Route path='/team' component={Team} />
              <Route path='/main' component={Main} />
      </Router>          
    )    
  }
}
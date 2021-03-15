import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Team from "./components/Team"   
import Main from "./components/Main"  
import UpdateBanner from "./components/UpdateBanner"

//on submit valus from state stored in payload
export default class App extends Component {
  render(){
    return(   
        <Router>
          <Navbar />

          <div className="dashboard">
            <h1 className="dashboard-title">Welcome to Befound tempate!</h1>
            <h5 className="dashboard-subtitle">Login <a href="#">here</a> to edit content.</h5>  
          </div>  

          <br />
              <Route path='/banner' component={Banner} />
              <Route path='/services' component={Services} />
              <Route path='/team' component={Team} />
              <Route path='/main' component={Main} />
              <Route path='/update' component={UpdateBanner} />
      </Router>  
      

    )    
  }
}
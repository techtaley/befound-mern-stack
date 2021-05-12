import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router-dom"

import Nav from './components/Nav'
import Dashboard from "./components/Dashboard"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Team from "./components/Team"   
import Main from "./components/Main"  
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

//on submit valus from state stored in payload
export default class App extends Component {
  render(){
    return(  
      <Router>
        <div className="App">
            <Nav />

            <Switch>
              <Route exact path="/app" component={Home} /> 
              <Route exact path="/app/login" component={Login} /> 
              <Route exact path="/app/register" component={Register} /> 
              <Route exact path="/app/banner" component={Banner} /> 
              <Route exact path="/app/dashboard" component={Dashboard} /> 
              <Route exact path="/app/main" component={Main} />                                           
              <Route exact path="/app/services" component={Services} /> 
              <Route exact path="/app/team" component={Team} /> 
            </Switch>

        </div>        

      </Router>


    )    
  }
}
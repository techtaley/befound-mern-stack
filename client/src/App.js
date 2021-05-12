import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from './components/Nav'
import Dashboard from "./components/Dashboard"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Team from "./components/Team"   
import Main from "./components/Main"  
import Home from "./components/Home"

import Login from "./components/Login"
import Logout from "./components/Logout"
import Register from "./components/Register"

//on submit valus from state stored in payload
export default class App extends Component {
  render(){
    return(  
        <div className="App">
            <Router>
                <Nav />

                <main>
                    <Route path="/app" exact component={Home} /> 
                    <Route path="/app/login" component={Login} />                 
                    <Route path="/app/logout" component={Logout} />                 
                    <Route path="/app/register" component={Register} /> 

                    <Route path="/app/banner" component={Banner} /> 
                    <Route path="/app/dashboard" component={Dashboard} /> 
                    <Route path="/app/main" component={Main} />                                           
                    <Route path="/app/services" component={Services} /> 
                    <Route path="/app/team" component={Team} /> 
                </main>

            </Router>

        </div>        
    )    
  }
}
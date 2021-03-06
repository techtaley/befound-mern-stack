import React, { Component } from 'react'
import Banner from './Banner'
import Services from './Services'
//import Team from './Team'
import Main from './Main'
import './App.css'

  //on submit valus from state stored in payload
class App extends Component {
  handleSubmit = async (e) => {
    e.preventDefault()
  }
  render(){
      return(
        <div className="main-form">
            <h1 className="title-app">Website Dashboard</h1>
            <h5 className="subtitle-app">Submit to only one section at a time, then refresh to submit to another section.</h5>

          <Banner />
          <hr />
          <Services /> 
          <hr />

          <Main />                     
        </div>
      )    
  }
}

export default App
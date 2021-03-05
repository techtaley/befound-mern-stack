import React, { Component } from 'react'
import Bannerform from './Bannerform'
import Serviceform from './Serviceform'
import Teamform from './Teamform'
import Mainform from './Mainform'
import './App.css'


class App extends Component {
  //on submit valus from state stored in payload
  handleSubmit = async (e) => {
    e.preventDefault()
  }
  render(){
      return(
        <div className="main-form">
          <Bannerform 
          
          />
          <Teamform />
          <Serviceform />
          <Mainform />

          <input 
            type="submit"
            value='submit'
            className='btn btn-danger btn-block'
        />             
        </div>
      )    
  }
}

export default App
import React, { Component} from 'react'
import '../../src/App.css' 

export default class Home extends Component{
    render(){
        return(
            <div className='login-title'>
                    <h2>You are not logged in.</h2>
                    <h5><a href="/login">Login</a> edit the content.</h5>
            </div> 
        )
    }
}
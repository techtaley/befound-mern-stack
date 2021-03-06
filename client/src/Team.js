import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

class Team extends Component {
    state = {
        url: '',
        name: '',
        title: '',
        results: []    
    }

    //when user clicks(event) inside input(target) handleChange triggered
    //handleChange gets values from event.target and updates value in state by name(key)
    handleChange = event => {
        const { name, value} = event.target  
        this.setState({ [name]: value }) 
    }

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    handleSubmit = event =>{
        event.preventDefault()

        const payload = {  
            url: this.state.url,
            name: this.state.name,
            title: this.state.title
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/team/form', payload)
        .then(() => {
            console.log('Data has been sent to the server')
            this.resetState()
        })  
        .catch(() => {
            console.log('Internal server error')
        })    
    }
            
    //then returns state back to empty string or use windows.location = '/' to go homepage
    resetState = () => {
        this.setState({
            url: '',
            name: '',
            title: '',
        }) 
    }
 
    render(){
        console.log('State: ', this.state)
        return (
            <div className='container'>
                <div className='form-div'>
                    <h1>Team</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            placeholder='url'
                            name='url'
                            onChange={this.handleChange}
                            value={this.state.url}
                            className='form-control form-group'
                        />
                        <input 
                            type='text'
                            placeholder='name'
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name}
                            className='form-control form-group'
                        />
                        <input 
                            type='text'
                            placeholder='title'
                            name='title'
                            onChange={this.handleChange}
                            value={this.state.title}
                            className='form-control form-group'
                        />

                        <h6>*Submit at least 3 team members.</h6>
                        <input 
                            type="submit"
                            value='Submit'
                            className='btn btn-primary btn-block'
                        />
                    </form>
                </div>
            </div>

        )
    }
}

export default Team
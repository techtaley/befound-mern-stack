import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"   
import axios from 'axios' 
import '../../src/App.css' 

//on submit valus from state stored in payload
export default class Login extends Component {
    state = {
        username: '',
        password: '',
        entries: []    
    }

    componentDidMount = () => {
        this.getResults()
    }

    //not needed 
    //get the results from database and display back to the page from state
    getResults = () => {
        axios.get('http://localhost:4000/login')
        .then((response) => {
            const data = response.data
            this.setState({ entries: data})
            console.log('Data has been received')
        }) 
        .catch((err) => {
            console.log(err)
        })
    }

    displayResults = entries => {
        if(!entries.length) return null

        return entries.map((entry, index) => 
            <div key={index}>                
                <h5>{entry.username}</h5>
            </div>                
        )
    }

    //when user clicks(event) inside input(target) handleChange triggered
    //handleChange gets values from event.target and updates value in state by name(key)
    handleChange = e => {
        const { name, value} = e.target  
        this.setState({ [name]: value }) 
    }

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    handleSubmit = e => {
        e.preventDefault()

        const payload = {  
            username: this.state.username,
            password: this.state.password,
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/login', payload)
        .then(() => {
            console.log('Data has been sent to the server')
            this.resetState()
        })  
        .catch(() => {
            console.log('Internal server error')
        }) 
    }
            
    //then returns state back to empty string if adding more or use windows.location = '/' to go homepage
    resetState = () => {
        this.setState({
            username: '',
            password: '',
        }) 
    }
 
    // deleteUser = id => {
    //     axios.delete('http://localhost:4000/login/'+id)
    //         .then(res => console.log(res.data))

    //         this.setState({
    //             entries: this.state.entries.filter(el => el._id !== id)
    //         })
    // }

    // editUser = id => {

    // }
 
    render(){
        console.log('State: ', this.state)
        return (
            <div className='container'>
                <div className="login">
                    <h1 className="title-app">Welcome to the Dashboard!</h1>
                    <h5 className="subtitle-app">Login to edit website content.</h5>
                </div>

                <div className='form-div'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            placeholder='username'
                            name='username'
                            onChange={this.handleChange}
                            value={this.state.username}
                            className='form-control form-group'
                        />
                        <input 
                            type='text'
                            placeholder='password'
                            name='password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            className='form-control form-group'
                        />
                        <input 
                            type="submit"
                            value='Submit'
                            className='btn btn-primary btn-block'
                        />
                    </form>
                </div>
                
                <div id="results">
                    <h1>Users</h1>
                    { this.displayResults(this.state.entries)}  
                </div>                
            </div>
        )
    }
}
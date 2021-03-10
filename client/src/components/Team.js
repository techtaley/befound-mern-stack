import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"   
import axios from 'axios' 
import '../../src/App.css' 

export default class Team extends Component {
    state = {
        url: '',
        name: '',
        title: '',
        entries: []    
    }

    componentDidMount = () => {
        this.getResults()
    }

    //not needed 
    //get the results from database and display back to the page from state
    getResults = () => {
        axios.get('http://localhost:4000/team')
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
                <h5>{entry.name}</h5>
                <p>{entry.title}</p>
                <p>{entry.url}</p>
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
            url: this.state.url,
            name: this.state.name,
            title: this.state.title
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/team', payload)
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
                            value='Add'
                            className='btn btn-primary btn-block'
                        />
                    </form>
                </div>
                <div id="results">
                    <h1>Team content</h1>
                    {this.displayResults(this.state.entries)}  
                </div>                
            </div>
        )
    }
}
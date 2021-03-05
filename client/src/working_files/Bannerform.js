import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

class Bannerform extends Component {
    state = { 
        bannerurl: '',
        bannertitle: '',
        bannerdesc: '',
        bannerlink: '',              
        results: []    
    }

    componentDidMount = () => {
        this.getResults()
    }

    //not needed 
    //get the results from database and display back to the page from state
    getResults = () => {
        axios.get('/api')
        .then((res) => {
            const data = res.data
            this.setState({ results: data})
            console.log('Data has been received')
        }) 
        .catch(() => {
            console.log('Error retreiving data.')
        })
    }

    //when user clicks(event) inside input(target) handleChange triggered
    //handleChange gets values from event.target and updates value in state by name(key)
    handleChange = event => {
        const { name, value} = event.target  
        this.setState({ [name]: value }) 
    }

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    handleSubmit = e =>{
        e.preventDefault()

        const payload = {  
            bannerurl: this.state.bannerurl,
            bannertitle: this.state.bannertitle,
            bannerdesc: this.state.bannerdesc,
            bannerlink: this.state.bannerurllink, 
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/form', payload)
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
            bannerurl: '',
            bannertitle: '',
            bannerdesc: '',
            bannerlink: '',                        
        }) 
    }
 
    render(){
        console.log('State: ', this.state)
        return (
            <div className='container'>
                <div className='form-div'>
                <form onSubmit={this.handleSubmit}>
                <h1>Banner section:</h1>
                    <input 
                        type='text'
                        placeholder='url'
                        name='bannerurl'
                        onChange={this.handleChange}
                        value={this.state.bannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='title'
                        name='bannertitle'
                        onChange={this.handleChange}
                        value={this.state.bannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='bannerdesc'
                        onChange={this.handleChange}
                        value={this.state.bannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='bannerlink'
                        onChange={this.handleChange}
                        value={this.state.bannerlink}
                        className='form-control form-group'
                    /> 

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

export default Bannerform
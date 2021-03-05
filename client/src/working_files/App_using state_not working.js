import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

class App extends Component {
    state = {
        banner:[
            {
                firstbannerurl: '',
                firstbannertitle: '',  
                firstbannerdesc: '',
                firstbannerlink: ''                 
            },
            {
                secondbannerurl: '',
                secondbannertitle: '',  
                secondbannerdesc: '',
                secondbannerlink: ''                 
            },
            {
                thirdbannerurl: '',
                thirdbannertitle: '',  
                thirdbannerdesc: '',
                thirdbannerlink: ''                 
            }                                                                                              
        ], 
        results: []                
    }//ends state

    //get values from form input and update state    
    handleChange = e => {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value             
        })
    } 

   //on submit valus from state stored in payload
    handleSubmit = async (e) => {
        e.preventDefault()

        //axios uses the post method on the url to send payload to database
        const payload = { 
            banner: [
                {
                    firstbannerurl: this.state.firstbannerurl,  
                    firstbannertitle: this.state.firstbannertitle,  
                    firstbannerdesc: this.state.firstbannerdesc, 
                    firstbannerlink: this.state.firstbannerlink
                },
                {
                    secondbannerurl: this.state.secondbannerurl,  
                    secondbannertitle: this.state.secondbannertitle,  
                    secondbannerdesc: this.state.secondbannerdesc, 
                    secondbannerlink: this.state.secondbannerlink
                },
                {
                    thirdbannerurl: this.state.thirdbannerurl,  
                    thirdbannertitle: this.state.thirdbannertitle,  
                    thirdbannerdesc: this.state.thirdbannerdesc, 
                    thirdbannerlink: this.state.thirdbannerlink
                }                                                                                              
            ]         
        } //ends payload        

        //when user clicks(event) submit button(target) hangleSubmit triggered
        //**handleSubmit takes values from state and stores inside a const payload
        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/form', payload)
        .then(() => {
            console.log('Data has been sent to the server')
            //resetState()  
        })  
        .catch(() => {
            console.log('Internal server error')
        })         
    }
        
    render(){
        return (
            <div className='container'>
            <div className='form-div'>
                <form onSubmit={this.handleSubmit}>
                <h1>Banner section:</h1>
                    <h3>First Banner Image</h3> 
                    <input 
                        type='text'
                        placeholder='first bannner image'
                        onChange={this.handleChange}
                        value={this.state.firstbannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='first banner title'
                        onChange={this.handleChange}
                        value={this.state.firstbannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='first banner desc'
                        onChange={this.handleChange}
                        value={this.state.firstbannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='first banner link'
                        onChange={this.handleChange}
                        value={this.state.firstbannerlink}
                        className='form-control form-group'
                    />
                    <h3>Second Banner Image</h3> 
                    <input 
                        type='text'
                        placeholder='second bannner image'
                        onChange={this.handleChange}
                        value={this.state.secondbannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='second banner title'
                        onChange={this.handleChange}
                        value={this.state.secondbannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='second banner desc'
                        onChange={this.handleChange}
                        value={this.state.secondbannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='second banner link'
                        onChange={this.handleChange}
                        value={this.state.secondbannerlink}
                        className='form-control form-group'
                    />
                    <h3>Third Banner Image</h3> 
                    <input 
                        type='text'
                        placeholder='third bannner image'
                        onChange={this.handleChange}
                        value={this.state.thirdbannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='third banner title'
                        onChange={this.handleChange}
                        value={this.state.thirdbannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='third banner desc'
                        onChange={this.handleChange}
                        value={this.state.thirdbannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='third banner link'
                        onChange={this.handleChange}
                        value={this.state.thirdbannerlink}
                        className='form-control form-group'
                    />                                     
    
                    <input 
                        type="submit"
                        value='Submit'
                        className='btn btn-danger btn-block'
                    />                        
                </form>
            </div>
        </div>
        )
    }
}

   export default App
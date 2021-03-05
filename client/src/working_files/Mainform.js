import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

class Mainform extends Component {
    state = {             
        firstquote: '',
        secondquote: '',  
        abouturl: '',
        aboutname: '',
        abouttitle: '',
        aboutdesc: '',
        servicestitle: '',  
        servicesdesc: '',  
        videoposter: '',  
        videourl: '',
        videodesc: '',
        videosource: '',
        contacturl: '',  
        results: []    
    }

    // componentDidMount = () => {
    //     this.getResults()
    // }

    // //not needed 
    // //get the results from database and display back to the paage from state
    // getResults = () => {
    //     axios.get('/api')
    //     .then((res) => {
    //         const data = res.data
    //         this.setState({ results: data})
    //         console.log('Data has been received')
    //     }) 
    //     .catch(() => {
    //         console.log('Error retreiving data.')
    //     })
    // }

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
            firstquote: this.state.firstquote,
            secondquote: this.state.secondquote,  
            abouturl: this.state.abouturl,
            aboutname: this.state.aboutname,
            abouttitle: this.state.abouttitle,
            aboutdesc: this.state.aboutdesc,
            servicestitle: this.state.servicestitle,  
            servicesdesc: this.state.servicesdesc,  
            videoposter: this.state.videoposter,  
            videourl: this.state.videourl,
            videodesc: this.state.videodesc,
            videosource: this.state.videosource,
            contacturl: this.state.contacturl   
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
            firstquote: '',
            secondquote: '',  
            abouturl: '',
            aboutname: '',
            abouttitle: '',
            aboutdesc: '',
            servicestitle: '',  
            servicesdesc: '',  
            videoposter: '',  
            videourl: '',
            videodesc: '',
            videosource: '',
            contacturl: '',                
        }) 
    }
 
    render(){
        return (
            <div className='container'>
                <div className='form-div'>
                <form onSubmit={this.handleSubmit}>                  
                <h1>Quotes section:</h1>
                    <input 
                        type='text'
                        placeholder='first quote'
                        name='firstquote'
                        onChange={this.handleChange}
                        value={this.state.firstquote}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='second quote'
                        name='secondquote'
                        onChange={this.handleChange}
                        value={this.state.secondquote}
                        className='form-control form-group'
                    />                      
                <h1>About section:</h1>
                    <input 
                        type='text'
                        placeholder='about url'
                        name='abouturl'
                        onChange={this.handleChange}
                        value={this.state.abouturl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about name'
                        name='aboutname'
                        onChange={this.handleChange}
                        value={this.state.aboutname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='about title'
                        name='abouttitle'
                        onChange={this.handleChange}
                        value={this.state.abouttitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about desc'
                        name='aboutdesc'
                        onChange={this.handleChange}
                        value={this.state.aboutdesc}
                        className='form-control form-group'
                    />                       
                <h1>Services section:</h1>
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicestitle'
                        onChange={this.handleChange}
                        value={this.state.servicestitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicesdesc'
                        onChange={this.handleChange}
                        value={this.state.servicesdesc}
                        className='form-control form-group'
                    />
                <h1>Video section:</h1>
                    <input 
                        type='text'
                        placeholder='video poster image'
                        name='videoposter'
                        onChange={this.handleChange}
                        value={this.state.videoposter}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video url'
                        name='videourl'
                        onChange={this.handleChange}
                        value={this.state.videourl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video desc'
                        name='videodesc'
                        onChange={this.handleChange}
                        value={this.state.videodesc}
                        className='form-control form-group'
                    />                                                                       
                    <input 
                        type='text'
                        placeholder='video source'
                        name='videosource'
                        onChange={this.handleChange}
                        value={this.state.videosource}
                        className='form-control form-group'
                    />                        
                <h1>Contact section:</h1>
                    <input 
                        type='text'
                        placeholder='contact url'
                        name='contacturl'
                        onChange={this.handleChange}
                        value={this.state.contacturl}
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

export default Mainform
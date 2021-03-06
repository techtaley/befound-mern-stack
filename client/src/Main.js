import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

class Main extends Component {
    state = {
        firstquote: '',
        secondquote: '',  
        abouturl: '',
        aboutname: '',
        abouttitle: '',
        aboutdesc: '', 
        videoposter: '',  
        videourl: '',
        videodesc: '',
        videosource: '',
        contacturl: '',   
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
            firstquote: this.state.firstquote, 
            secondquote: this.state.secondquote,  
            abouturl: this.state.abouturl,
            aboutname: this.state.aboutname,
            abouttitle: this.state.abouttitle, 
            aboutdesc: this.state.aboutdesc,
            videoposter: this.state.videoposter,  
            videourl: this.state.videourl,
            videodesc: this.state.videodesc,
            videosource: this.state.videosource,
            contacturl: this.state.contacturl
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/main/form', payload)
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
            videoposter: '',  
            videourl: '',
            videodesc: '',
            videosource: '',
            contacturl: '',
        }) 
    }
 
    render(){
        console.log('State: ', this.state)
        return (
            <div className='container'>
                <div className='form-div'>
                    <h1>Main section</h1>
                    <form onSubmit={this.handleSubmit}>
                    <h3>Quotes</h3>
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
                <h3>About</h3>
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
                <h3>Video</h3>
                    <input 
                        type='text'
                        placeholder='video poster'
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
                <h3>Contact</h3>
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

export default Main
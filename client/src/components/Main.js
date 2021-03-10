import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import '../../src/App.css' 

export default class Main extends Component { 
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
        entries: []    
    }

    componentDidMount = () => {
        this.getResults()
    }

    //not needed 
    //get the results from database and display back to the page from state
    getResults = () => {
        axios.get('http://localhost:4000/main')
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
                <h5>{entry.firstquote}</h5>
                <p>{entry.secondquote}</p>
                <p>{entry.abouturl}</p>
                <p>{entry.aboutname}</p>
                <p>{entry.abouttitle}</p>
                <p>{entry.aboutdesc}</p>
                <p>{entry.videoposter}</p>
                <p>{entry.videourl}</p>
                <p>{entry.videodesc}</p>
                <p>{entry.contacturl}</p>                
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
    handleSubmit = e =>{
        e.preventDefault()

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
        axios.post('http://localhost:4000/main', payload)
        .then(() => {
            console.log('Data has been sent to the server')
        })  
        .catch(() => {
            console.log('Internal server error')
        }) 
        
        window.location = '/'
        
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
                            value='Add'
                            className='btn btn-primary btn-block'
                        />
                    </form>
                </div>
                <div id="results">
                    <h1>Main content</h1>
                    {this.displayResults(this.state.entries)}  
                </div>                
            </div>
        )
    }
}
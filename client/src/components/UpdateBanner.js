import React, {Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import '../../src/App.css' 

export default class UpdateBanner extends Component{
    state = {
        url: '',
        title: '',
        desc: '',
        link: '',
        entries: []    
    }

    //when program loads, display a banner item by id from db into state
    compoundDidMount(){
        axios.get('http://localhost:4000/api/banner/'+this.match.body.id)
        .then(res => {
            this.setState({
                url:  res.data.url,
                title: res.data.title,
                desc: res.data.desc,
                link: res.data.link
            })
        })  
        .catch(() => {
            console.log('Internal server error')
        }) 
    }

    //when user clicks(event) inside input(target) handleChange triggered
    //handleChange gets values from e.target and updates value in state by name(key)
    handleChange = e => {
        const { name, value } = e.target  
        this.setState({ [name]: value }) 
    }

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    handleSubmit = e => {
        e.preventDefault()

        const payload = {  
            url: this.state.url,
            title: this.state.title,
            desc: this.state.desc,
            link: this.state.link
        }     
                
        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/banner/update/'+this.match.params.id, payload)
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
            title: '',
            desc: '',
            link: '',                
        }) 
    }
 
    render(){
        //console.log('State: ', this.state)
        return (
            <div className='container'>
                <div className='form-div'>
                <h1>Edit Banner</h1>

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
                        placeholder='title'
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.title}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='desc'
                        name='desc'
                        onChange={this.handleChange}
                        value={this.state.desc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='link'
                        name='link'
                        onChange={this.handleChange}
                        value={this.state.link}
                        className='form-control form-group'
                    />

                    <input 
                        type="submit"
                        value='Update'
                        className='btn btn-primary btn-block'
                    />
                </form>
                </div>
            </div>
        )
    }
}
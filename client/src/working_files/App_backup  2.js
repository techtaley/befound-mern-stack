import React, { useState } from 'react'
//import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

export default function App(){
    const [allValues, setAllValues] = useState({
        bannerurl: '',
        bannertitle: '',  
        bannerdesc: '',
        bannerlink: '', 
        firstquote: '',
        secondquote: '',  
        abouturl: '',
        aboutname: '',
        abouttitle: '',
        aboutdesc: '',
        servicetitle: '',  
        servicedesc: '',  
        videoposter: '',  
        videourl: '',
        videodesc: '',
        videosource: '',
        contacturl: '',      
    })

    //gat values from form input and update state    
    const handleChange = e => {
        setAllValues( prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value}
        })
    }

    //on submit valus from state stored in payload
    const handleSubmit = async (e) => {
        e.preventDefault()

        //axios uses the post method on the url to send payload to database
        const payload = { 
            bannerurl: allValues.bannerurl,  
            bannertitle: allValues.bannertitle,  
            bannerdesc: allValues.bannerdesc, 
            bannerlink: allValues.bannerlink,  
            firstquote: allValues.firstquote, 
            secondquote: allValues.secondquote,  
            abouturl: allValues.abouturl,
            aboutname: allValues.aboutname,
            abouttitle: allValues.abouttitle, 
            aboutdesc: allValues.aboutdesc,
            servicetitle: allValues.servicetitle,  
            servicedesc: allValues.servicedesc,  
            videoposter: allValues.videoposter,  
            videourl: allValues.videourl,
            videodesc: allValues.videodesc,
            videosource: allValues.videosource,
            contacturl: allValues.contacturl
        }  

        //when user clicks(event) submit button(target) hangleSubmit triggered
        //**handleSubmit takes values from state and stores inside a const payload
        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/form', payload)
        .then(() => {
            console.log('Data has been sent to the server')
            resetState()  
        })  
        .catch(() => {
            console.log('Internal server error')
        })  
    }     

    //then returns state back to empty string or use windows.location = '/' to go homepage
    const resetState = () => {
        this.setState({
            bannerurl: '',
            bannertitle: '',
            bannerdesc: '',
            bannerlink: '',
            firstquote: '',
            secondquote: '',
            abouturl: '',
            aboutname: '',
            abouttitle: '',
            aboutdesc: '',
            servicetitle: '',
            servicedesc: '',
            videoposter: '',
            videourl: '',
            videodesc: '',
            videosource: '',
            contacturl: '',        
        })       
    }

    //console.log('State: ', this.state)        
    return (
        <div className='container'>
            <div className='form-div'>
            <form onSubmit={handleSubmit}>
                <h1 className="title">Backend</h1>
                <h2>Banner</h2>
                    <input 
                        type='text'
                        placeholder='url'
                        name='bannerurl'
                        onChange={handleChange}
                        value={allValues.bannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='title'
                        name='bannertitle'
                        onChange={handleChange}
                        value={allValues.bannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='bannerdesc'
                        onChange={handleChange}
                        value={allValues.bannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='bannerlink'
                        onChange={handleChange}
                        value={allValues.bannerlink}
                        className='form-control form-group'
                    />  

                    <input 
                        type="submit"
                        value='Submit'
                        className='btn btn-danger btn-block'
                    />                                      
            </form>

            <form onSubmit={handleSubmit}>
                <h2>Services</h2>
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicetitle'
                        onChange={handleChange}
                        value={allValues.servicetitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicedesc'
                        onChange={handleChange}
                        value={allValues.servicedesc}
                        className='form-control form-group'
                    />   

                    <input 
                        type="submit"
                        value='Submit'
                        className='btn btn-danger btn-block'
                    />  
            </form>

            <form onSubmit={handleSubmit}>
                <h2>Quotes</h2>
                    <input 
                        type='text'
                        placeholder='first quote'
                        name='firstquote'
                        onChange={handleChange}
                        value={allValues.firstquote}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='second quote'
                        name='secondquote'
                        onChange={handleChange}
                        value={allValues.secondquote}
                        className='form-control form-group'
                    />                      
                <h2>About</h2>
                    <input 
                        type='text'
                        placeholder='about url'
                        name='abouturl'
                        onChange={handleChange}
                        value={allValues.abouturl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about name'
                        name='aboutname'
                        onChange={handleChange}
                        value={allValues.aboutname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='about title'
                        name='abouttitle'
                        onChange={handleChange}
                        value={allValues.abouttitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about desc'
                        name='aboutdesc'
                        onChange={handleChange}
                        value={allValues.aboutdesc}
                        className='form-control form-group'
                    />                       
                <h2>Services</h2>
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicetitle'
                        onChange={handleChange}
                        value={allValues.servicetitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicedesc'
                        onChange={handleChange}
                        value={allValues.servicedesc}
                        className='form-control form-group'
                    />
                <h2>Video</h2>
                    <input 
                        type='text'
                        placeholder='video poster'
                        name='videoposter'
                        onChange={handleChange}
                        value={allValues.videoposter}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video url'
                        name='videourl'
                        onChange={handleChange}
                        value={allValues.videourl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video desc'
                        name='videodesc'
                        onChange={handleChange}
                        value={allValues.videodesc}
                        className='form-control form-group'
                    />                                                                       
                    <input 
                        type='text'
                        placeholder='video source'
                        name='videosource'
                        onChange={handleChange}
                        value={allValues.videosource}
                        className='form-control form-group'
                    />                        
                <h2>Contact</h2>
                    <input 
                        type='text'
                        placeholder='contact url'
                        name='contacturl'
                        onChange={handleChange}
                        value={allValues.contacturl}
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
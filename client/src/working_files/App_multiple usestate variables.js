import React, { useState, useEffect } from 'react'
//import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

export default function App(){
    const [allValues, setAllValues] = useState({
        
    })
	const [bannerurl, setBannerurl] = useState('');  
	const [bannertitle, setBannertitle] = useState('');  
	const [bannerdesc, setBannerdesc] = useState('');  
	const [bannerlink, setBannerlink] = useState('');  
	const [firstquote, setFirstquote] = useState('');  
	const [secondquote, setSecondquote] = useState('');  
	const [abouturl, setAbouturl] = useState('');  
	const [aboutname, setAboutname] = useState('');  
	const [abouttitle, setAbouttitle] = useState('');  
	const [aboutdesc, setAboutdesc] = useState('');  
	const [servicetitle, setServicetitle] = useState('');  
	const [servicedesc, setServicedesc] = useState('');  
	const [posterimage, setPosterimage] = useState('');  
	const [videourl, setVideourl] = useState('');                  
	const [videodesc, setVideodesc] = useState('');  
	const [videosource, setVideosource] = useState('');  
    const [contacturl,setContacturl] = useState('');     
    //const results = []

    const submitForm = async (event) => {
        event.preventDefault()

        const payload = {  
            url: this.state.url,
            title: this.state.title,
            desc: this.state.desc,
            link: this.state.link
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

    //when user clicks(event) inside input(target) setVariable  triggered
    //setVariable gets values from event.target and updates value in state
    useEffect(() => {
        async function getResults(){
            axios.get('/api')
            .then((res) => {
                const data = res.data
                //this.setState({ results: data})
                console.log('Data has been received')
            }) 
            .catch(() => {
                alert('Error retreiving data.')
            })
        }
    
        getResults()        
    })

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //**handleSubmit takes values from state and stores inside a const payload

    //axios uses the post method on the url to send payload to database
    useEffect(() => {
        const payload = { 
            bannerurl: bannerurl,  
            bannertitle: bannertitle,  
            bannerdesc: bannerdesc, 
            bannerlink: bannerlink,  
            firstquote: firstquote, 
            secondquote: secondquote,  
            abouturl: abouturl,
            aboutname: aboutname,
            abouttitle: abouttitle, 
            aboutdesc: aboutdesc,
            servicetitle: servicetitle,  
            servicedesc: servicedesc,  
            posterimage: posterimage,  
            videourl: videourl,
            videodesc: videodesc,
            videosource: videosource,
            contacturl: contacturl
        }

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/form', payload)
        .then(() => {
            console.log('Data has been sent to the server')
           //this.resetState()            
        })  
        .catch(() => {
            console.log('Internal server error')
        })  
    })      

    //then returns state back to empty string or use windows.location = '/' to go homepage
    // function resetState(){
    //     this.setState = {
    //         bannerurl: '',
    //         bannertitle: '',
    //         bannerdesc: '',
    //         bannerlink: '',
    //         firstquote: '',
    //         secondquote: '',
    //         abouturl: '',
    //         aboutname: '',
    //         abouttitle: '',
    //         aboutdesc: '',
    //         servicetitle: '',
    //         servicedesc: '',
    //         posterimage: '',
    //         videourl: '',
    //         videodesc: '',
    //         videosource: '',
    //         contacturl: '',        
    //     }       
    // }

    //console.log('State: ', this.state)        

    return (
        <div className='container'>
            <div className='form-div'>
                <form onSubmit={submitForm}>
                <h1>Banner section:</h1>
                    <input 
                        type='text'
                        placeholder='url'
                        name='bannerurl'
                        onChange={(e)=> setBannerurl(e.target.value)}
                        value={bannerurl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='title'
                        name='bannertitle'
                        onChange={(e)=> setBannertitle(e.target.value)}
                        value={bannertitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner desc'
                        name='bannerdesc'
                        onChange={(e)=> setBannerdesc(e.target.value)}
                        value={bannerdesc}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='banner link'
                        name='bannerlink'
                        onChange={(e)=>  setBannerlink(e.target.value)}
                        value={bannerlink}
                        className='form-control form-group'
                    />
                <h1>Quotes section:</h1>
                    <input 
                        type='text'
                        placeholder='first quote'
                        name='firstquote'
                        onChange={(e)=> setFirstquote(e.target.value)}
                        value={firstquote}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='second quote'
                        name='secondquote'
                        onChange={(e)=> setSecondquote(e.target.value)}
                        value={secondquote}
                        className='form-control form-group'
                    />                      
                <h1>About section:</h1>
                    <input 
                        type='text'
                        placeholder='about url'
                        name='abouturl'
                        onChange={(e)=> setAbouturl(e.target.value)}
                        value={abouturl}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about name'
                        name='aboutname'
                        onChange={(e)=> setAboutname(e.target.value)}
                        value={aboutname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='about title'
                        name='abouttitle'
                        onChange={(e)=> setAbouttitle(e.target.value)}
                        value={abouttitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='about desc'
                        name='aboutdesc'
                        onChange={(e)=> setAboutdesc(e.target.value)}
                        value={aboutdesc}
                        className='form-control form-group'
                    />                       
                <h1>Services section:</h1>
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicetitle'
                        onChange={(e)=> setServicetitle(e.target.value)}
                        value={servicetitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicedesc'
                        onChange={(e)=> setServicedesc(e.target.value)}
                        value={servicedesc}
                        className='form-control form-group'
                    />
                <h1>Video section:</h1>
                    <input 
                        type='text'
                        placeholder='video poster image'
                        name='posterimage'
                        onChange={(e)=> setPosterimage(e.target.value)}
                        value={posterimage}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video url'
                        name='videourl'
                        onChange={(e)=> setVideourl(e.target.value)}
                        value={videourl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='video desc'
                        name='videodesc'
                        onChange={(e)=> setVideodesc(e.target.value)}
                        value={videodesc}
                        className='form-control form-group'
                    />                                                                       
                    <input 
                        type='text'
                        placeholder='video source'
                        name='videosource'
                        onChange={(e)=> setVideosource(e.target.value)}
                        value={videosource}
                        className='form-control form-group'
                    />                        
                <h1>Contact section:</h1>
                    <input 
                        type='text'
                        placeholder='contact url'
                        name='contacturl'
                        onChange={(e)=> setContacturl(e.target.value)}
                        value={contacturl}
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
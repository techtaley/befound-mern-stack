import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'

export default function App(){
    const [allValues, setAllValues] = useState(
        {
            banner:[
                {
                    bannerurl: '',
                    bannertitle: '',  
                    bannerdesc: '',
                    bannerlink: ''                 
                },
                {
                    bannerurl: '',
                    bannertitle: '',  
                    bannerdesc: '',
                    bannerlink: ''                 
                },
                {
                    bannerurl: '',
                    bannertitle: '',  
                    bannerdesc: '',
                    bannerlink: ''                 
                }                                                                                              
            ],
            firstquote: '',
            secondquote: '',  
            abouturl: '',
            aboutname: '',
            abouttitle: '',
            aboutdesc: '',
            team: [
                {
                    teamurl: '',
                    teamname: '',
                    teamtitle: ''  
                },
                {
                    teamurl: '',
                    teamname: '',
                    teamtitle: ''  
                },
                {
                    teamurl: '',
                    teamname: '',
                    teamtitle: ''  
                }                                                
            ],
            services: [
                {
                    servicestitle: '',  
                    servicesdesc: ''     
                },
                {
                    servicestitle: '',  
                    servicesdesc: ''     
                },
                {
                    servicestitle: '',  
                    servicesdesc: ''     
                }                                                  
           ],
            videoposter: '',  
            videourl: '',
            videodesc: '',
            videosource: '',
            contacturl: '',   
            results: []
        }
    )

    //get values from form input and update state    
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
            banner: [
                {
                    bannerurl: allValues.bannerurl,  
                    bannertitle: allValues.bannertitle,  
                    bannerdesc: allValues.bannerdesc, 
                    bannerlink: allValues.bannerlink
                },
                {
                    bannerurl: allValues.bannerurl,  
                    bannertitle: allValues.bannertitle,  
                    bannerdesc: allValues.bannerdesc, 
                    bannerlink: allValues.bannerlink
                },
                {
                    bannerurl: allValues.bannerurl,  
                    bannertitle: allValues.bannertitle,  
                    bannerdesc: allValues.bannerdesc, 
                    bannerlink: allValues.bannerlink
                }                                                               
            ],            
            firstquote: allValues.firstquote, 
            secondquote: allValues.secondquote,  
            abouturl: allValues.abouturl,
            aboutname: allValues.aboutname,
            abouttitle: allValues.abouttitle, 
            aboutdesc: allValues.aboutdesc,
            team: [
                {
                    teamurl: allValues.teamurl,
                    teamname: allValues.teamname,
                    teamtitle: allValues.teamtitle
                }
            ],
            services: [
                {
                    servicestitle: allValues.servicestitle,  
                    servicesdesc: allValues.servicesdesc
                }
            ],
            videoposter: allValues.videopostr,  
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
        allValues(
            {
                banner:[
                    {
                        bannerurl: '',
                        bannertitle: '',  
                        bannerdesc: '',
                        bannerlink: ''                 
                    },
                    {
                        bannerurl: '',
                        bannertitle: '',  
                        bannerdesc: '',
                        bannerlink: ''                 
                    },
                    {
                        bannerurl: '',
                        bannertitle: '',  
                        bannerdesc: '',
                        bannerlink: ''                 
                    }                                
                ],
                firstquote: '',
                secondquote: '',  
                abouturl: '',
                aboutname: '',
                abouttitle: '',
                aboutdesc: '',
                team: [
                    {
                        teamurl: '',
                        teamname: '',
                        teamtitle: ''  
                    },
                    {
                        teamurl: '',
                        teamname: '',
                        teamtitle: ''  
                    },
                    {
                        teamurl: '',
                        teamname: '',
                        teamtitle: ''  
                    }                                                
                ],
                services: [
                    {
                        servicestitle: '',  
                        servicesdesc: ''     
                    },
                    {
                        servicestitle: '',  
                        servicesdesc: ''     
                    },
                    {
                        servicestitle: '',  
                        servicesdesc: ''     
                    }                                                  
                ],
                videoposter: '',  
                videourl: '',
                videodesc: '',
                videosource: '',
                contacturl: '', 
            }
        )
    }

    return (
        <div className='container'>
            <div className='form-div'>
                <form onSubmit={handleSubmit}>
                <h1>Banner section:</h1>
                    <h3>First Banner Image</h3> 
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
                    <h3>Second Banner Image</h3> 
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
                    <h3>Third Banner Image</h3> 
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
                <h1>Quotes section:</h1>
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
                <h1>Team section:</h1>
                <h3>First Team Member</h3>
                    <input 
                        type='text'
                        placeholder='team url'
                        name='teamurl'
                        onChange={handleChange}
                        value={allValues.teamurl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='team name'
                        name='teamname'
                        onChange={handleChange}
                        value={allValues.teamname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='team title'
                        name='teamtitle'
                        onChange={handleChange}
                        value={allValues.teamtitle}
                        className='form-control form-group'
                    />                                         
                <h3>Second Team Member</h3>
                    <input 
                        type='text'
                        placeholder='team url'
                        name='teamurl'
                        onChange={handleChange}
                        value={allValues.teamurl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='team name'
                        name='teamname'
                        onChange={handleChange}
                        value={allValues.teamname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='team title'
                        name='teamtitle'
                        onChange={handleChange}
                        value={allValues.teamtitle}
                        className='form-control form-group'
                    />  
                <h3>Third Team Member</h3>
                    <input 
                        type='text'
                        placeholder='team url'
                        name='teamurl'
                        onChange={handleChange}
                        value={allValues.teamurl}
                        className='form-control form-group'
                    /> 
                    <input 
                        type='text'
                        placeholder='team name'
                        name='teamname'
                        onChange={handleChange}
                        value={allValues.teamname}
                        className='form-control form-group'
                    />                        
                    <input 
                        type='text'
                        placeholder='team title'
                        name='teamtitle'
                        onChange={handleChange}
                        value={allValues.teamtitle}
                        className='form-control form-group'
                    />                                          
                <h1>About section:</h1>
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
                <h1>Services section:</h1>
                    <h3>First Services</h3> 
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicestitle'
                        onChange={handleChange}
                        value={allValues.servicestitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicesdesc'
                        onChange={handleChange}
                        value={allValues.servicesdesc}
                        className='form-control form-group'
                    />
                    <h3>Second Services</h3> 
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicestitle'
                        onChange={handleChange}
                        value={allValues.servicestitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicesdesc'
                        onChange={handleChange}
                        value={allValues.servicesdesc}
                        className='form-control form-group'
                    />  
                    <h3>Third Services</h3> 
                    <input 
                        type='text'
                        placeholder='services title'
                        name='servicestitle'
                        onChange={handleChange}
                        value={allValues.servicestitle}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='service desc'
                        name='servicesdesc'
                        onChange={handleChange}
                        value={allValues.servicesdesc}
                        className='form-control form-group'
                    />                                      
                <h1>Video section:</h1>
                    <input 
                        type='text'
                        placeholder='video poster image'
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
                <h1>Contact section:</h1>
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

<h1>Quotes section:</h1>
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
<h1>Team section:</h1>
<h3>First Team Member</h3>
    <input 
        type='text'
        placeholder='team url'
        name='firstteamurl'
        onChange={handleChange}
        value={allValues.firstteamurl}
        className='form-control form-group'
    /> 
    <input 
        type='text'
        placeholder='team name'
        name='firstteamname'
        onChange={handleChange}
        value={allValues.firstteamname}
        className='form-control form-group'
    />                        
    <input 
        type='text'
        placeholder='team title'
        name='firstteamtitle'
        onChange={handleChange}
        value={allValues.firstteamtitle}
        className='form-control form-group'
    />                                         
<h3>Second Team Member</h3>
    <input 
        type='text'
        placeholder='team url'
        name='secondteamurl'
        onChange={handleChange}
        value={allValues.secondteamurl}
        className='form-control form-group'
    /> 
    <input 
        type='text'
        placeholder='team name'
        name='secondteamname'
        onChange={handleChange}
        value={allValues.secondteamname}
        className='form-control form-group'
    />                        
    <input 
        type='text'
        placeholder='team title'
        name='secondteamtitle'
        onChange={handleChange}
        value={allValues.secondteamtitle}
        className='form-control form-group'
    />  
<h3>Third Team Member</h3>
    <input 
        type='text'
        placeholder='team url'
        name='thirdteamurl'
        onChange={handleChange}
        value={allValues.thirdteamurl}
        className='form-control form-group'
    /> 
    <input 
        type='text'
        placeholder='team name'
        name='thirdteamname'
        onChange={handleChange}
        value={allValues.thirdteamname}
        className='form-control form-group'
    />                        
    <input 
        type='text'
        placeholder='team title'
        name='thirdteamtitle'
        onChange={handleChange}
        value={allValues.thirdteamtitle}
        className='form-control form-group'
    />                                          
<h1>About section:</h1>
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
<h1>Services section:</h1>
    <h3>First Services</h3> 
    <input 
        type='text'
        placeholder='services title'
        name='firstservicestitle'
        onChange={handleChange}
        value={allValues.firstservicestitle}
        className='form-control form-group'
    />
    <input 
        type='text'
        placeholder='service desc'
        name='firstservicesdesc'
        onChange={handleChange}
        value={allValues.firstservicesdesc}
        className='form-control form-group'
    />
    <h3>Second Services</h3> 
    <input 
        type='text'
        placeholder='services title'
        name='secondservicestitle'
        onChange={handleChange}
        value={allValues.secondservicestitle}
        className='form-control form-group'
    />
    <input 
        type='text'
        placeholder='service desc'
        name='secondservicesdesc'
        onChange={handleChange}
        value={allValues.secondservicesdesc}
        className='form-control form-group'
    />  
    <h3>Third Services</h3> 
    <input 
        type='text'
        placeholder='services title'
        name='thirdservicestitle'
        onChange={handleChange}
        value={allValues.thirdservicestitle}
        className='form-control form-group'
    />
    <input 
        type='text'
        placeholder='service desc'
        name='thirdservicesdesc'
        onChange={handleChange}
        value={allValues.thirdservicesdesc}
        className='form-control form-group'
    />                                      
<h1>Video section:</h1>
    <input 
        type='text'
        placeholder='video poster image'
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
<h1>Contact section:</h1>
    <input 
        type='text'
        placeholder='contact url'
        name='contacturl'
        onChange={handleChange}
        value={allValues.contacturl}
        className='form-control form-group'
    /> 
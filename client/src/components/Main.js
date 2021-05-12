import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import '../../src/App.css' 

export default function Main() { 
    const [ firstquote, setFirstquote ] = useState('')
    const [ secondquote, setSecondquote ] = useState('')
    const [ abouturl, setAbouturl ] = useState('')
    const [ aboutname, setAboutname ] = useState('')
    const [ abouttitle, setAbouttitle ] = useState('')
    const [ aboutdesc, setAboutdesc ] = useState('')
    const [ videoposter, setVideoposter ] = useState('')
    const [ videourl, setVideourl ] = useState('')
    const [ videodesc, setVideodesc ] = useState('')
    const [ videosource, setVideosource ] = useState('')
    const [ contacturl, setContacturl ] = useState('')
    const [ entries, getEntries ] = useState([])
    const [ newFirstquote, setNewFirstquote ] = useState('')
    const [ newSecondquote, setNewSecondquote ] = useState('')
    const [ newAbouturl, setNewAbouturl ] = useState('')
    const [ newAboutname, setNewAboutname ] = useState('')
    const [ newAbouttitle, setNewAbouttitle ] = useState('')
    const [ newAboutdesc, setNewAboutdesc ] = useState('')
    const [ newVideoposter, setNewVideoposter ] = useState('')
    const [ newVideourl, setNewVideourl ] = useState('')
    const [ newVideodesc, setNewVideodesc ] = useState('')
    const [ newVideosource, setNewVideosource ] = useState('')
    const [ newContacturl, setNewContacturl ] = useState('')

    //axios - stringifies JSON data
    useEffect(() => {
        async function fetchEntries(){
            axios.get('http://localhost:4000/api/main')
            .then((response) => {
                const data = response.data
                getEntries(response.data)
                console.log(data)
            }) 
            .catch((err) => {
                console.log(err)
            })
        }

        fetchEntries()
    }, [])

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    const handleSubmit = (e) =>{
        e.preventDefault()

        //axios uses the post method on the url to send payload to database
        axios.post('http://localhost:4000/api/main',  {  
            firstquote: firstquote, 
            secondquote: secondquote,  
            abouturl: abouturl,
            aboutname: aboutname,
            abouttitle: abouttitle, 
            aboutdesc: aboutdesc,
            videoposter: videoposter,  
            videourl: videourl,
            videodesc: videodesc,
            videosource: videosource,
            contacturl: contacturl
        })
        .then(() => {
            console.log('Data has been sent to the server')
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
        })  
        .catch(() => {
            console.log('Internal server error')
        }) 
        
        //window.location = '/'
    }

    //then returns state back to empty string if adding more or use windows.location = '/' to go homepage
    // const resetState = () => {
    //     this.setState({
    //         firstquote: '', 
    //         secondquote: '',  
    //         abouturl: '',
    //         aboutname: '',
    //         abouttitle: '', 
    //         aboutdesc: '',
    //         videoposter: '', 
    //         videourl: '',
    //         videodesc: '',
    //         videosource: '',
    //         contacturl: '',
    //     }) 
    // }     

    const updateEntry = (id) => {
        axios.put('http://localhost:4000/update', {
            id: id,
            newFirstquote: newFirstquote, 
            newSecondquote: newSecondquote,  
            newAbouturl: newAbouturl,
            newAboutname: newAboutname,
            newAbouttitle: newAbouttitle, 
            newAboutdesc: newAboutdesc,
            newVideoposter: newVideoposter,  
            newVideourl: newVideourl,
            newVideodesc: newVideodesc,
            newvideosource: newVideosource,
            newContacturl: newContacturl
        })
    }

    const deleteEntry = (id) => {
        axios.delete(`http://localhost:4000/main/${id}`)
    }    
            
    return (
        <div className='container'>
            <div className='form-div'>
                <h1>Main section</h1>
                <form onSubmit={handleSubmit}>
                <h3>Quotes</h3>
                <input 
                    type='text'
                    placeholder='first quote'
                    name='firstquote'
                    onChange={(e) => {
                        setFirstquote(e.target.value)
                    }}
                    value={firstquote}
                    className='form-control form-group'
                />
                <input 
                    type='text'
                    placeholder='second quote'
                    name='secondquote'
                    onChange={(e) => {
                        setSecondquote(e.target.value)
                    }}
                    value={secondquote}
                    className='form-control form-group'
                />                      
            <h3>About</h3>
                <input 
                    type='text'
                    placeholder='about url'
                    name='abouturl'
                    onChange={(e) => {
                        setAbouturl(e.target.value)
                    }}
                    value={abouturl}
                    className='form-control form-group'
                />
                <input 
                    type='text'
                    placeholder='about name'
                    name='aboutname'
                    onChange={(e) => {
                        setAboutname(e.target.value)
                    }}
                    value={aboutname}
                    className='form-control form-group'
                />                        
                <input 
                    type='text'
                    placeholder='about title'
                    name='abouttitle'
                    onChange={(e) => {
                        setAbouttitle(e.target.value)
                    }}
                    value={abouttitle}
                    className='form-control form-group'
                />
                <input 
                    type='text'
                    placeholder='about desc'
                    name='aboutdesc'
                    onChange={(e) => {
                        setAboutdesc(e.target.value)
                    }}
                    value={aboutdesc}
                    className='form-control form-group'
                />                       
            <h3>Video</h3>
                <input 
                    type='text'
                    placeholder='video poster'
                    name='videoposter'
                    onChange={(e) => {
                        setVideoposter(e.target.value)
                    }}
                    value={videoposter}
                    className='form-control form-group'
                /> 
                <input 
                    type='text'
                    placeholder='video url'
                    name='videourl'
                    onChange={(e) => {
                        setVideourl(e.target.value)
                    }}
                    value={videourl}
                    className='form-control form-group'
                /> 
                <input 
                    type='text'
                    placeholder='video desc'
                    name='videodesc'
                    onChange={(e) => {
                        setVideodesc(e.target.value)
                    }}
                    value={videodesc}
                    className='form-control form-group'
                />                                                                       
                <input 
                    type='text'
                    placeholder='video source'
                    name='videosource'
                    onChange={(e) => {
                        setVideosource(e.target.value)
                    }}
                    value={videosource}
                    className='form-control form-group'
                />                        
            <h3>Contact</h3>
                <input 
                    type='text'
                    placeholder='contact url'
                    name='contacturl'
                    onChange={(e) => {
                        setContacturl(e.target.value)
                    }}
                    value={contacturl}
                    className='form-control form-group'
                />

                    <input 
                        type="submit"
                        value='Add'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div>

            <div className="results">
                <h1 className="heading">Update Main</h1>                
                  { entries.map((entry, id) => {
                        return (
                            <div className="entries" key={id}>
                                <div className="new_entries">    
                                    <p>{entry.firstquote}</p>
                                    <p>{entry.secondquote}</p>
                                    <img className='entry-img' 
                                        src={entry.abouturl} 
                                        alt={entry.abouttitle}
                                    />
                                    <p>{entry.aboutname}</p>
                                    <p>{entry.abouttitle}</p>
                                    <p>{entry.aboutdesc}</p>
                                    <p>{entry.videoposter}</p>
                                    <p>{entry.videourl}</p>
                                    <p>{entry.videodesc}</p>
                                    <p>{entry.videosource}</p>
                                    <p>{entry.contacturl}</p>
                                </div>                            

                                <div className="update_entries">

                                    <input placeholder='New first quote' onChange={(e) => {
                                        setNewFirstquote(e.target.value)
                                    }} />
  
                                    <input placeholder='New second quote' onChange={(e) => {
                                        setNewSecondquote(e.target.value)
                                    }} />  

                                    <input placeholder='New about url image' onChange={(e) => {
                                        setNewAbouturl(e.target.value)
                                    }} />  

                                    <input placeholder='New about name' onChange={(e) => {
                                        setNewAboutname(e.target.value)
                                    }} />  

                                    <input placeholder='New about title' onChange={(e) => {
                                        setNewAbouttitle(e.target.value)
                                    }} />  

                                    <input placeholder='New about desc' onChange={(e) => {
                                        setNewAboutdesc(e.target.value)
                                    }} />  

                                    <input placeholder='New video poster' onChange={(e) => {
                                        setNewVideoposter(e.target.value)
                                    }} />  

                                    <input placeholder='New video url' onChange={(e) => {
                                        setNewVideourl(e.target.value)
                                    }} />  
                                                                        <input placeholder='New videodesc' onChange={(e) => {
                                        setNewVideodesc(e.target.value)
                                    }} />  

                                    <input placeholder='New video source' onChange={(e) => {
                                        setNewVideosource(e.target.value)
                                    }} />  

                                    <input placeholder='New contacturl' onChange={(e) => {
                                        setNewContacturl(e.target.value)
                                    }} />  

                                    <div className="btn_holder">
                                        <button className="update_delete" onClick={() => updateEntry(entry._id)}>Update</button> |  <button className="update_delete" onClick={() => deleteEntry(entry._id)}>Delete</button> 
                                    </div> 
                                </div>
                        </div>
                        )
                  })}
            </div>                
        </div>
    )
}
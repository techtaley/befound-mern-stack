import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from 'axios'
import './App.css'

export default function Teamform(){
    const [allValues, setAllValues] = useState({
        team: [
            {
                teamul: '',  
                teamname: '',
                teamtitle: ''  
            }
        ]   
    })

    //gat values from form input and update state    
    const handleChange = e => {
        setAllValues( prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value}
        })
    }

    //on submit valus from state stored in payload
    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     //axios uses the post method on the url to send payload to database
    //     const payload = {
    //         team: [
    //             {
    //                 teamurl: allValues.teamurl,
    //                 teamname: allValues.teamname,
    //                 teamtitle: allValues.teamtitle
                            
    //             }    
    //         ]
    //     }  

        //when user clicks(event) submit button(target) hangleSubmit triggered
        //**handleSubmit takes values from state and stores inside a const payload
        //axios uses the post method on the url to send payload to database
    //     axios.post('http://localhost:4000/api/form', payload)
    //     .then(() => {
    //         console.log('Data has been sent to the server')
    //         resetState()  
    //     })  
    //     .catch(() => {
    //         console.log('Internal server error')
    //     })  
    // }     

    //then returns state back to empty string or use windows.location = '/' to go homepage
    // const resetState = () => {
    //     this.setState({
    //         team: [
    //             {
    //                 teamul: '',  
    //                 teamname: '',
    //                 teamtitle: ''  
    //             }
    //         ]    
    //     })       
    // }

    //console.log('State: ', this.state)        
    return (
        <div className='container'>
            <div className='form-div'>
                <form>
                <h1>Team section:</h1>
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
                    
                    <input 
                        type="submit"
                        value='Add/Update'
                        className='btn btn-primary btn-block'
                    />  
                </form>
            </div>
        </div>
    )
}
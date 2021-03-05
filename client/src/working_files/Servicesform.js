import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from 'axios'
import './App.css'

export default function Serviceform(){
    const [allValues, setAllValues] = useState({
        services: [
            {
                servicetitle: '',  
                servicedesc: '' 
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
    //         servicetitle: allValues.servicetitle,  
    //         servicedesc: allValues.servicedesc
    //     }  

    //     //when user clicks(event) submit button(target) hangleSubmit triggered
    //     //**handleSubmit takes values from state and stores inside a const payload
    //     //axios uses the post method on the url to send payload to database
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
    //         services: [
    //             {
    //                 servicetitle: '',  
    //                 servicedesc: '' 
    //             }
    //         ]      
    //     })       
    // }

    //console.log('State: ', this.state)        
    return (
        <div className='container'>
            <div className='form-div'>
                <form>
                    <h1>Services section:</h1>
                        <h3>First Services</h3> 
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
                        <h3>Second Services</h3> 
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
                        <h3>Third Services</h3> 
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
                            value='Add/Update'
                            className='btn btn-primary btn-block'
                        /> 
                </form>
            </div>
        </div>
    )
}
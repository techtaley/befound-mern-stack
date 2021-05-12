import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import '../../src/App.css'
import {Redirect } from 'react-router-dom'

//on submit valus from state stored in payload
export default function Login(){
    const [ email, getEmail ] = useState('')    
    const [ password, getPassword ] = useState('')
    const [ redirect, setRedirect ] = useState(false)     
 
    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    const handleSubmit = async (e) => {
        e.preventDefault()

        //axios sends data to database from state
        axios.post('http://localhost:4000/api/login', {
            email: email,
            password: password
        }, {withCredentials: true}).then(res => {
            console.log(res)
            //resetState() 
        }).catch(err => {
            console.log(err)
        })

        setRedirect(true)

        //then returns state back to empty string if adding more or use windows.location = '/' to go homepage
        // const resetState = () => {
        //     this.setState({
        //         username: '',
        //         password: ''
        //     }) 
        // }     
    }
 
    if(redirect) return <Redirect to="/app/dashboard" />   

    return (
        <div className='container'>
            <div className="form-div">
            <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='email'
                        name='email'
                        onChange={e => {
                            getEmail(e.target.value)
                        }}                        
                        value={email}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='password'
                        name='password'
                        onChange={e => {
                            getPassword(e.target.value)
                        }}                       
                        value={password}
                        className='form-control form-group'
                    />
                    <input 
                        type="submit"
                        value='Login'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div> 
        </div>
    )
}

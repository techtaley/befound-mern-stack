import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import '../../src/App.css'
import {Redirect } from 'react-router-dom'

//on submit values from state stored in payload
export default function Register(){
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')    
    const [ password, setPassword ] = useState('')  
    const [ redirect, setRedirect ] = useState(false) 

    //when user clicks(event) submit button(target) hangleSubmit triggered
    //handleSubmit takes values from state and stores inside a const payload
    const handleSubmit = async (e) => {
        e.preventDefault()

        //axios sends data to database from state
        axios.post('http://localhost:4000/api/register', {
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password
        }).then(res => {
            console.log(res)
            resetState()
        }).catch(err => {
            console.log(err)
        }) 
        
        setRedirect(true)
    }

    //then returns state back to empty string if adding more or use windows.location = '/' to go homepage
    const resetState = () => {
        this.setState({
            username: '',
            email: '',
            password: ''
        }) 
    } 
   
    if(redirect) return <Redirect to="/app/login" />
    
    return (
        <div className='container'>
            <div className="form-div">
            <h1>Registeration</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='username'
                        name='username'
                        onChange={e => {
                            setUsername(e.target.value)
                        }}
                        value={username}
                        className='form-control form-group'
                    />
                    <input 
                        type='text'
                        placeholder='email'
                        name='email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}                        
                        value={email}
                        className='form-control form-group'
                        required
                    />
                    <input 
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}                        
                        value={password}
                        className='form-control form-group'
                        required
                    />
                    <input 
                        type="submit"
                        value='Register'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div> 
        </div>
    )
}
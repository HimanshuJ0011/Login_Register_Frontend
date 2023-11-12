import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from "./images/user.png"


const Login = () => {
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate= useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/login', {email, password })
        .then(result=>{
            console.log(result)
            if (result.data==="success"){
                navigate('/home');
                alert("welcome to the homepage")
            }
            else if(result.data==="Password is incorrect."){
                alert("enter a valid password !");
            }
            else{
                navigate('/register');
                alert("invalid user login");
            }
            })
        .catch(err=>console.log(err));
        }

        
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25 '>
        <h1 className='d-flex justify-content-center align-item-center text-white bg-success'>LOGIN</h1>
        <div className='d-flex justify-content-center align-items-center' >
        <img className='h-50 w-50' src={image}></img>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <br/>
                <input
                    placeholder='Enter mail'
                    type='email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Password</strong>
                </label>
                <br/>
                <input
                    placeholder='Enter password'
                    type='password'
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
    <div/>
            <button type='submit' className='btn btn-success w-100 rounded-0'>LOGIN</button>
            <p>New User?</p>
            <Link to="/Register" type='submit' className='btn btn-default border w-100 bg-light rounded-o text-decoration-none'>REGISTER</Link>
        </form>
    </div>
  
</div>
  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import image from "./images/user.png"

const Signup = () => {

    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [dob, setDob] = useState()
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password, dob })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err));
    }
    const handleRegister = () => {
        const userData = { name, email, dob, password };

        localStorage.setItem('userData', JSON.stringify(userData));

    };



    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25 '>
                <h1 className='d-flex justify-content-center align-item-center bg-success text-white'>REGISTER</h1>

                <div className='d-flex justify-content-center align-items-center ' >

                    <img className='h-50 w-50' src={image}></img>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 '>
                        <label htmlFor='email'>
                            <strong>Name</strong>
                        </label>
                        <br />
                        <input
                            placeholder='Enter name'
                            type='text'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <br />
                        <input
                            placeholder='Enter mail'
                            type='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>DOB</strong>
                        </label>
                        <br />
                        <input
                            placeholder='Enter dob'
                            type='date'
                            className='form-control rounded-0'
                            onChange={(e) => setDob(e.target.value)}
                        ></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <br />
                        <input
                            placeholder='Enter password'
                            type='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div />
                    <button onClick={handleRegister} type='submit' className='btn btn-success w-100 rounded-0'>REGISTER</button>
                    <p>Already have an account?</p>
                    <Link to="/login" type='submit' className='btn btn-default border w-100 bg-light rounded-o text-decoration-none'>LOGIN</Link>
                </form>
            </div>

        </div>
    )
}

export default Signup;

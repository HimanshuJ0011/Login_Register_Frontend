import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
     <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
          <h1 className="mb-4">WELCOME !! <span>LOGIN or REGISTER here</span></h1>
          <div className='mb-4'>
            <Link to="/login" className='btn btn-primary mb-2 mr-2'>LOGIN</Link>
            <Link to="/register" className='btn btn-secondary mb-2 ml-2'>REGISTER</Link>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Welcome
import React from 'react'
import { Link } from 'react-router-dom'
import { Form} from 'react-bootstrap'
import login from '../assets/login.png'

function Auth({insideSignup}) {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
     <div className='container w-75'>
     <Link to={'/'} className='text-dark' style={{ textDecoration: 'none' }}><i className='fa-solid fa-arrow-left text-dark'></i>Back To Home</Link>
      <div className='shadow p-5 one'>
        <div className='row align-items-center '>
          <div className='col-lg-6'>
           <img className='w-75 ms-5' src={login} alt="Authentication" />
          </div>
          <div className='col-lg-6'>
             <h1 className='fw-bolder text-dark mt-2'>J<span>o</span>b P<span>o</span>r<span>t</span>a<span>l</span></h1>
             <h5  className='fw-bolder text-dark mt-2'>Sign {insideSignup ? 'up':'In'} To Your Account</h5>
             <Form>
                {insideSignup &&
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" value=""/>
                  </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" value=""/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" value=""/>
                </Form.Group>
                {
                  insideSignup ?
                    <div>
                      <button className='btn mb-2 text-dark' style={{backgroundColor:'rgb(163,162,162)'}}>Sign up</button>
                      <p>Already have Account? Click here to <Link to={'/login'} className='text-success ' >Login</Link></p>
                    </div> :
                    <div>
                      <button className='btn text-dark mb-2' style={{backgroundColor:'rgb(163,162,162)'}}>Login</button>
                      <p>New User? Click here to <Link to={'/signup'} className='text-success'>SignUp</Link></p>
                    </div>
                }
                </Form>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Auth
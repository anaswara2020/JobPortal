import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     <Navbar expand="lg" style={{height:'90px'}}  className=" head">
      <Container>
        <Navbar.Brand href="/"><i class="fa-solid fa-shield-halved"></i> Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='border border-dark border-2'/>
        <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'rgb(163,162,162)'}}>
          <Nav className="mx-auto">
            <Nav.Link href="/" className='text-light'>Start search</Nav.Link>
            <Nav.Link href="/myjob"><b>My Jobs</b></Nav.Link>
            <Nav.Link href="/salary"><b>Salary estimate</b></Nav.Link>
            <Nav.Link href="/postJob"><b>Post Job</b></Nav.Link>
          </Nav>
          <div>
            <Link to={'/login'}><button type='button' style={{borderRadius:'50px' ,width:'90px'}} className='log'>Login</button></Link>
            <Link to={'/signup'}><button type='button'  style={{borderRadius:'50px' ,width:'90px'}}  className='ms-4 log'>Sign Up</button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
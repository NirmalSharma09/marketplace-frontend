import React from 'react';
import Sidebar from '../Sidebar';
import 'bootstrap/js/dist/dropdown';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'; 


const CommonNavbar = () => {
  const navigate = useNavigate(); 
  const { userType } = useParams();

  console.log(userType)
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("./login")
  }

  return (
    <div>
    {/* Bootstrap Navbar */}
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        {/* Navbar Toggler (for mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar Links */}
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Content */}
    <Container>
      {/* Your page content goes here */}
      <h1>Welcome to Your Website</h1>
      <p>This is a simple Bootstrap navbar example in React.</p>
    </Container>
  </div>

  )
}

export default Navbar

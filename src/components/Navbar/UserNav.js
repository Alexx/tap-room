import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SignIn from './SignIn'
import SiteLogo from './SiteLogo';

function UserNav(){

  var myStyle = {
    background: "none"
  }

  return (
    <Navbar style={myStyle} expand="lg">
      <Navbar.Brand href="#home"><SiteLogo/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <SignIn />
      </Navbar.Collapse>
    </Navbar>

  );
}

export default UserNav;
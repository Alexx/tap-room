import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignIn from './SignIn';
import SiteLogo from './SiteLogo';

function UserNav() {

  let myStyle = {
    background: 'none'
  };

  return (
    <Navbar style={myStyle} expand="lg">
      <Navbar.Brand href="/"><SiteLogo/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <SignIn/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNav;
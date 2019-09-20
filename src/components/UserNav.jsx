import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../img/logo.png";

function UserNav() {
  let myStyle = {
    background: "none"
  };

  let myLogo = {
    height: "50px",
    width: "150px",
    float: "left"
  };

  return (
    <Navbar style={myStyle} expand="lg">
      <Link className="navbar-brand" to="/">
        <Image style={myLogo} src={Logo} rounded />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <DropdownButton
          variant="info"
          id="dropdown-basic-button"
          title="Sign In"
        >
          <Link className="dropdown-item" role="button" to="/">
            {" "}
            Patron{" "}
          </Link>
          <Link className="dropdown-item" role="button" to="/employee">
            {" "}
            Employee{" "}
          </Link>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNav;

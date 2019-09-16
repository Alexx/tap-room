import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="Sign In">
      <Dropdown.Item><Link to="/"> Patron </Link></Dropdown.Item>
      <Dropdown.Item><Link to="/employee"> Employee </Link></Dropdown.Item>
    </DropdownButton>
  );
}

export default SignIn;

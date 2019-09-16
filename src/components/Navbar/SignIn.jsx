import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="Sign In">
      <Link className="dropdown-item" role="button" to="/"> Patron </Link>
      <Link className="dropdown-item" role="button" to="/employee"> Employee </Link>
    </DropdownButton>
  );
}

export default SignIn;

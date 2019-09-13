import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SignIn() {
  return (
    <DropdownButton variant="info" id="dropdown-basic-button" title="Sign In">
      <Dropdown.Item href="/">Patron</Dropdown.Item>
      <Dropdown.Item href="/employee">Employee</Dropdown.Item>
    </DropdownButton>
  );
}

export default SignIn;
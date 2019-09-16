import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const buttonStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '25%'
};

function KegListTitleEmployee() {
  return (
    <Button style={buttonStyle} variant="dark"><Link to="/keg_add"> Add </Link></Button>
  );
}

export default KegListTitleEmployee;

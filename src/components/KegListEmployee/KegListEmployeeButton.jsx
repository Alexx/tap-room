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
    <Link to="/keg_add"><Button style={buttonStyle} variant="dark"> Add </Button></Link>
  );
}

export default KegListTitleEmployee;

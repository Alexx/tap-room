import React from 'react';
import Button from 'react-bootstrap/Button';

const buttonStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '25%'
}

function KegListTitleEmployee() {
  return (
    <Button href="/keg_add" style={buttonStyle} variant="dark">Add</Button>
  );
}

export default KegListTitleEmployee;


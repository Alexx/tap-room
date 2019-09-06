import React from 'react';
import Button from 'react-bootstrap/Button'

const myStyle = {
  borderRadius: '40px 40px 0px 0px ',
  display: 'inline-block'
};

const buttonStyle = {
  float: 'right',
  marginRight: '2.2rem',
  marginTop: '1rem'
}

function KegListTitleEmployee() {
  return (
    <div>
      <h1 style={myStyle} className="Keg-list">Kegs</h1>
      <Button style={buttonStyle} variant="dark">Add</Button>
    </div>
  );
}

export default KegListTitleEmployee;
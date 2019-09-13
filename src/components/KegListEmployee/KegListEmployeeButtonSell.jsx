import React from 'react';
import Button from 'react-bootstrap/Button';

const buttonStyle = {
  marginRight: 'auto',
  marginLeft: 'auto'
};

const myStyle = {
  listStyleType: 'none',
  display: 'block',
  float: 'right'
};

function KegListTitleEmployee(props) {
  return (
    <ul style={myStyle}>
      <li><Button onClick={() => props.onSellPint(props.id)} style={buttonStyle} variant="dark">Sell</Button></li>
      <li><Button href="/keg_edit" className="edit-button" variant="dark">Edit</Button></li>
    </ul>

  );
}

export default KegListTitleEmployee;


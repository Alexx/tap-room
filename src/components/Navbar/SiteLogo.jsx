import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../../img/logo.png';

function SiteLogo(){
  var myStyle = {
    height: '50px',
    width: '150px',
    float: 'left',
  };
  return (
    <Image style={myStyle} src={Logo} rounded />
  );
}

export default SiteLogo;
import React from 'react';
import { Image } from 'react-bootstrap'
import Logo from '../../assets/img/logo.png'

function SiteLogo(){
  var myStyle = {
    height: '75px',
    width: '200px',
    float: 'left',
  }
  return (
    <Image style={myStyle} src={Logo} rounded />
  );
}

export default SiteLogo;
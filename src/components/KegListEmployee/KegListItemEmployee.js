import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const itemStyle = {
  display: 'inline-block'
}

const pintStyle = {
  float: 'right',
  marginRight: '1rem'
}

const pintNormal = {
  color: 'white'
}

const pintLow = {
  color: 'red'
}

function KegListItem(props) {
  let style;
  if (props.inventory <= 30) {
    style = pintLow;
  } else {
    style = pintNormal;
  }
  
  return (
    <div className="Keg-list-item">
      <div style={itemStyle}>
        <h3>{props.name}</h3>
        by {props.brand}<br/>
        ${props.price}/pint<br/>
        {props.alcoholContent}% alcohol content<br/>
        </div>
        <div style={pintStyle}>
          Pints: <span style={style}>{props.inventory}</span>/124<br/>
          <Button href="/keg_edit" className="edit-button" variant="dark">Edit</Button>
        </div>
      <hr/>
    </div>
  );
}

KegListItem.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired
};

export default KegListItem;
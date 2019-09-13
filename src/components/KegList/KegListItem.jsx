import React from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
  display: 'inline-block'
};

const pintStyle = {
  float: 'right',
  marginRight: '1rem'
};

const pintNormal = {
  color: 'white'
};

const pintLow = {
  color: 'red'
};

function KegListItemEmployee(props) {
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
        Pints: <span style={style}>{props.inventory}</span>/124
      </div>
      <hr/>
    </div>
  );
}

KegListItemEmployee.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default KegListItemEmployee;
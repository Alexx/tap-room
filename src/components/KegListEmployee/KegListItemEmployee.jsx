import React from 'react';
import PropTypes from 'prop-types';
import KegListEmployeeButtonSell from './KegListEmployeeButtonSell';

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

function KegListItem(props) {
  let style;
  if (props.inventory <= 10) {
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
        <KegListEmployeeButtonSell id={props.id} onSellPint={props.onSellPint}/>
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
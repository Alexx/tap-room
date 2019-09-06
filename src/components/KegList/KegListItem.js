import React from 'react';
import PropTypes from 'prop-types';


function KegListItemEmployee(props) {
  return (
    <div className="Keg-list-item">
        <h3>{props.name}</h3>
        by {props.brand}<br/>
        ${props.price}/pint<br/>
        {props.alcoholContent}% alcohol content<br/>
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
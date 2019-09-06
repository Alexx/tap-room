import React from 'react';
import PropTypes from 'prop-types';

function KegListItem(props) {
  return (
    <div className="Keg-list-item">
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>${props.price}</p>
      <p>{props.alcoholContent}% alcohol content</p>
      <hr/>
    </div>
  );
}

KegListItem.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default KegListItem;
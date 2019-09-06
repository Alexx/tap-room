import React from 'react';
import PropTypes from "prop-types";

function KegListItem(props) {
  return (
    <div className="Keg-list-item">
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>${props.price}</h3>
      <h3>{props.alcoholContent}% alcohol content</h3>
      <hr/>
    </div>
  );
}

KegListItem.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
}

export default KegListItem;
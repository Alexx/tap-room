import React from 'react';
import KegListTitle from './KegListTitle';
import KegListItem from './KegListItem';
import kegData from '../../KegData'

let myStyle = {
  borderRadius: '40px',
  width: '50%',
  marginRight: 'auto',
  marginLeft: 'auto'
};

function KegList() {
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitle/>
      <hr/>
      {kegData.map((keg, index) =>
        <KegListItem 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}
        />
      )}
    </div>
  );
}

export default KegList;
import React from 'react';
import KegListTitle from './KegListTitle';
import KegListItemEmployee from './KegListItemEmployee';
import kegData from '../../KegData'

let myStyle = {
  borderRadius: '40px',
  width: "50%"
};

function KegListEmployee() {
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitle/>
      <hr/>
      {kegData.map((keg, index) =>
        <KegListItemEmployee 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          inventory={keg.inventory}
          key={index}
        />
      )}
    </div>
  );
}

export default KegListEmployee;
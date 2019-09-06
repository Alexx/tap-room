import React from 'react';
import KegListTitleEmployee from './KegListTitleEmployee';
import KegListItemEmployee from './KegListItemEmployee';
import kegData from '../../KegData'

let myStyle = {
  borderRadius: '40px',
  width: '50%',
  marginRight: 'auto',
  marginLeft: 'auto'
};

function KegListEmployee() {
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitleEmployee/>
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
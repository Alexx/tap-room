import React from 'react';
import KegListTitleEmployee from './KegListTitleEmployee';
import KegListItemEmployee from './KegListItemEmployee';
import KegListEmployeeButton from './KegListEmployeeButton';

let myStyle = {
  borderRadius: '40px',
  width: '50%',
  backgroundColor: '#17a2b8',
  padding: '12px',
  marginRight: 'auto',
  marginLeft: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
};

function KegListEmployee(props) {
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitleEmployee/>
      <hr/>
      {props.kegData.map((keg, index) =>
        <KegListItemEmployee 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          inventory={keg.inventory}
          key={index}
        />
      )}
      <KegListEmployeeButton/>
    </div>
  );
}

export default KegListEmployee;
import React from 'react';
import KegListTitle from './KegListTitle';
import KegListItem from './KegListItem';
import { useSelector } from 'react-redux';

const myStyle = {
  borderRadius: '40px',
  width: '50%',
  backgroundColor: '#17a2b8',
  padding: '12px',
  marginRight: 'auto',
  marginLeft: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
};

function KegList() {
  const kegData = useSelector(state => state.kegData);
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitle/>
      <hr/>
      {kegData.map((keg, index) =>
        <KegListItem
          id={keg.id}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          inventory={keg.inventory}
          key={keg.id}
        />
      )}
    </div>
  );
}

export default KegList;

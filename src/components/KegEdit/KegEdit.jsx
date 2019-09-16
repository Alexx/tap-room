import React from 'react';
import KegEditTitle from './KegEditTitle';
import KegEditForm from './KegEditForm';

const myStyle = {
  borderRadius: '40px',
  backgroundColor: '#17a2b8',
  padding: '12px',
  width: '50%',
  marginRight: 'auto',
  marginLeft: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
};

function KegEdit(props) {
  return (
    <div style={myStyle} className="Keg-edit">
      <KegEditTitle/>
      <KegEditForm onEditKeg={props.onEditKeg}/>
    </div>
  );
}

export default KegEdit;

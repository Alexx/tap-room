import React from 'react';
import KegAddTitle from './KegAddTitle';
import KegAddForm from './KegAddForm';

const myStyle = {
  borderRadius: '40px',
  backgroundColor: '#17a2b8',
  padding: '12px',
  width: '50%',
  marginRight: 'auto',
  marginLeft: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
};

function KegAdd(props) {
  return (
    <div style={myStyle} className="Keg-add">
      <KegAddTitle/>
      <KegAddForm onNewKeg={props.onNewKeg} onNewKegValue={props.onNewKegValue} data={props.data}/>
    </div>
  );
}

export default KegAdd;

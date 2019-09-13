import React from 'react';

const myStyle = {
  borderRadius: '40px 40px 0px 0px ',
  backgroundColor: '#1b8ea1'
};

function KegEditTitle() {
  return (
    <h1 style={myStyle} className="Keg-edit-title">Edit Keg</h1>
  );
}

export default KegEditTitle;
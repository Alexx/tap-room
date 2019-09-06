import React from 'react';
import KegListTitle from './KegListTitle'
import KegListItem from './KegListItem'

const kegList = [
  {
    name: "Hyper Bomb",
    brand: "Galax",
    price: 3.99,
    alcoholContent: 7
  },
  {
    name: "Tracks",
    brand: "Green Woods",
    price: 3.79,
    alcoholContent: 6
  },
  {
    name: "Cashin",
    brand: "Pimplin",
    price: 5.29,
    alcoholContent: 8
  },
  {
    name: "Sasquatch",
    brand: "Twisties",
    price: 3.79,
    alcoholContent: 9
  },
]

let myStyle = {
  borderRadius: "40px"
}

function KegList() {
  return (
    <div style={myStyle} className="Keg-list">
      <KegListTitle/>
      <hr/>
      {kegList.map((keg, index) =>
      <KegListItem name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      key={index}/>
      )}
    </div>
  );
}

export default KegList;
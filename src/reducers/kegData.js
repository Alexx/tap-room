let newKeg = '';

let nextKegId = 5;

const kegData = [
  {
    id: 1,
    name: 'Hyper Bomb',
    brand: 'Galax',
    price: 3.99,
    alcoholContent: 7,
    inventory: 75
  },
  {
    id: 2,
    name: 'Tracks',
    brand: 'Green Woods',
    price: 3.79,
    alcoholContent: 6,
    inventory: 103
  },
  {
    id: 3,
    name: 'Cashin',
    brand: 'Pimplin',
    price: 5.29,
    alcoholContent: 8,
    inventory: 63
  },
  {
    id: 4,
    name: 'Sasquatch',
    brand: 'Twisties',
    price: 4.19,
    alcoholContent: 9,
    inventory: 10
  },
]

// handleNewKeg = () => {
//   const newKegId = this.state.nextKegId + 1;
//   this.setState(state => {
//     const kegData = state.kegData.concat(state.newKeg);
//     return {
//       kegData,
//       newKeg: '',
//       nextKegId: newKegId
//     };
//   });
//   console.log(this.state.kegData);
// };
//
// handleNewKegValue = (newKeg) => {
//   const addKeg = newKeg
//   this.setState({newKeg: addKeg});
// }
//
// handleUpdateKeg = (id, updatedKeg) => {
//   this.setState(state => {
//     const list = state.kegData.map((keg, index) => {
//       if (index === id) {
//         return updatedKeg;
//       } else {
//         return keg;
//       }
//     });
//     return {
//       updatedKeg,
//     };
//   });
// };
//


const kegDataReducer = (state = kegData, action) => {
  switch (action.type){

    case 'ADD':
      // const newKegId = this.state.nextKegId + 1;
        const newKegData = kegData.concat(state.newKeg);
        return {
          kegData,
          newKeg: '',
          nextKegId: newKegId
        };
      console.log(this.state.kegData);
      return state

    case 'SELL_PINT':
      const newKegData = kegData;
        if (newKegData.find(x => x.id === action.payload).inventory - 1 >= 0) {
          newKegData.find(x => x.id === action.payload).inventory = newKegData.find(x => x.id === action.payload).inventory - 1;
          state = newKegData
        }
        return state

    default:
      return state
  }
}

export default kegDataReducer;

const nextKegIdReducer = (state = 5, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export default nextKegIdReducer;

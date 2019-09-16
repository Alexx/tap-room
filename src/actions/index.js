export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const clear = () => {
  return {
    type: 'CLEAR',
  };
};

export const add = (keg) => {
  return {
    type: 'ADD',
    payload: keg
  };
};

export const sellPint = (id) => {
  return {
    type: 'SELL_PINT',
    payload: id
  };
};

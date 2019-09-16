export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const sellPint = (id) => {
  return {
    type: 'SELL_PINT',
    payload: id
  };
};

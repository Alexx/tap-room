import kegDataReducer from './kegData';
import nextKegIdReducer from './nextKegId';
import newKegReducer from './newKeg';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  kegData: kegDataReducer,
  nextKegId: nextKegIdReducer,
  newKeg: newKegReducer
});

export default allReducers;

import kegDataReducer from './kegData';
import nextKegIdReducer from './nextKegId'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  kegData: kegDataReducer,
  nextKegId: nextKegIdReducer
});

export default allReducers;

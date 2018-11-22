import { combineReducers } from 'redux';

import loadReducer from './loadReducer';
import cartReducer from './cartReducer';
import displayReducer from './displayReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  products: loadReducer,
  cart: cartReducer,
  display: displayReducer,
  alerts: alertReducer
});
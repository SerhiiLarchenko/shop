import { combineReducers } from 'redux';

import loadReducer from './loadReducer';
import cartReducer from './cartReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  products: loadReducer,
  cart: cartReducer,
  display: displayReducer
});
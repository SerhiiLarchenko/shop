import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  cart: cartReducer,
  display: displayReducer
});
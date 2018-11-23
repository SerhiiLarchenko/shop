import { TOGGLE_ALERT,
         TOGGLE_CART_LIST,
         TOGGLE_FORM } from '../actions/types';

const initState = {
  alert: false,
  cart: false,
  form: false
}

export default function(state = initState, action) {

  switch (action.type) {
    case TOGGLE_ALERT:
      return {...state, alert: action.toggle}
    case TOGGLE_CART_LIST:
      return {...state, cart: action.toggle}
    case TOGGLE_FORM:
      return {...state, form: action.toggle}
    default: 
      return state;
  }
}
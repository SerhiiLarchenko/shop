import { TOGGLE_CART_LIST, TOGGLE_FORM } from '../actions/types';

const initState = {
    cartIsShown: false,
    formIsShown: false,
}

export default function(state = initState, action) {

    switch (action.type) {
        case TOGGLE_CART_LIST:
            return {...state, cartIsShown: action.toggle}
        case TOGGLE_FORM:
            return {...state, formIsShown: action.toggle}
        default: 
            return state;
    }
}
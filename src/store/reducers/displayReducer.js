import { SHOW_CART_LIST,
    HIDE_CART_LIST, 
    SHOW_FORM, 
    HIDE_FORM } from '../actions/types';

const initState = {
    cartIsShown: false,
    formIsShown: false,
}

export default function(state = initState, action) {
    const newState = {...state};
    switch (action.type) {
        case SHOW_CART_LIST:
            newState.cartIsShown = true;
            return newState;
        case HIDE_CART_LIST:
            newState.cartIsShown = false;
            return newState;
        case SHOW_FORM:
            newState.formIsShown = true;
            return newState;
        case HIDE_FORM:
            newState.formIsShown = false;
    }
}
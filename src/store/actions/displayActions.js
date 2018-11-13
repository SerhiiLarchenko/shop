import { TOGGLE_CART_LIST, TOGGLE_FORM } from './types';

export const toggleCartList = toggle => dispatch => {

    dispatch({
        type: TOGGLE_CART_LIST,
        toggle
    })
}

export const toggleForm = toggle => dispatch => {
    dispatch({
        type: TOGGLE_FORM,
        toggle
    })
}
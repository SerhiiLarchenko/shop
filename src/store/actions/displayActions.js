import { SHOW_CART_LIST,
    HIDE_CART_LIST, 
    SHOW_FORM, 
    HIDE_FORM } from '../actions/types';

export const showCartList = (dispatch) => {
    dispatch({type: SHOW_CART_LIST})
}

export const hideCartList = (dispatch) => {
    dispatch({type: HIDE_CART_LIST})
}

export const showForm = (dispatch) => {
    dispatch({type: SHOW_FORM})
}

export const hideForm = (dispath) => {
    dispath({type: HIDE_FORM})
}


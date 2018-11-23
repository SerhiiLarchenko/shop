import {ADD_TO_CART, 
        REMOVE_FROM_CART, 
        CHANGE_NUMBER,
        EMPTY_CART} from './types';

export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        product
    })
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        id
    })
}

export const changeNumber = (product,sign) => (dispatch) => {
    dispatch({
        type: CHANGE_NUMBER,
        product,
        sign
    })
}

export const emptyCart = () => (dispatch) => {
    dispatch({type: EMPTY_CART})
}
import {ADD_TO_CART, 
        REMOVE_FROM_CART, 
        INCREASE_TIMES, 
        DECREASE_TIMES, 
        EMPTY_CART} from './types';

export const addToCart = (productData) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: productData
    })
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}

export const increaseTimes = (productData) => (dispatch) => {
    dispatch({
        type: INCREASE_TIMES,
        payload: productData
    })
}

export const decreaseTimes = (productData) => (dispatch) => {
    dispatch({
        type: DECREASE_TIMES,
        payload: productData
    })
}

export const emptyCart = (dispatch) => {
    dispatch({type: EMPTY_CART})
}
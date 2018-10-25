import {ADD_TO_CART, 
        REMOVE_FROM_CART, 
        INCREASE_TIMES, 
        DECREASE_TIMES, 
        EMPTY_CART} from './types';

export const addToCart = (id, title, price, times) => (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: id, title, price, times
    })
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}

export const increaseTimes = (times, id) => (dispatch) => {
    dispatch({
        type: INCREASE_TIMES,
        payload: times, id
    })
}

export const decreaseTimes = (times, id) => (dispatch) => {
    dispatch({
        type: DECREASE_TIMES,
        payload: times, id
    })
}

export const emptyCart = (dispatch) => {
    dispatch({type: EMPTY_CART})
}
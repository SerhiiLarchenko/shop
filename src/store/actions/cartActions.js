import {ADD_TO_CART, 
        REMOVE_FROM_CART, 
        INCREASE_TIMES, 
        DECREASE_TIMES, 
        EMPRTY_CART} from './types';

export const addToCart = (dispatch) => {
    dispatch({
        type: ADD_TO_CART,
        payload: id, title, price, times
    })
}

export const removeFromCart = (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}

export const increaseTimes = (dispatch) => {
    dispatch({
        type: INCREASE_TIMES,
        payload: times, id
    })
}

export const decreaseTimes = (dispatch) => {
    dispatch({
        type: DECREASE_TIMES,
        payload: times, id
    })
}

export const emptyCart = (dispatch) => {
    dispatch({type: EMPRTY_CART})
}
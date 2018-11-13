import axios from 'axios';

import { LOAD_PRODUCTS } from './types';

const API = 'http://localhost:8000/products'

export const loadProducts = (cb) => (dispatch) => {
   
    axios.get(API).then(res => {
         let { products } = res.data;
         return dispatch({
            type: LOAD_PRODUCTS,
            payload: products
        });
    
    }).then(()=>{
        if (cb) cb({loaded: true});
    });
    
}
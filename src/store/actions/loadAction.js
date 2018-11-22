import axios from 'axios';

import { LOAD_PRODUCTS } from './types';

const API = 'http://localhost:8000/products'

export const loadProducts = (cb, ecb) => (dispatch) => {
   
  axios.get(API).then(res => {
     let { products } = res.data;
     return dispatch({
      type: LOAD_PRODUCTS,
      products
    });
  }).then(() => { if (cb) cb({loaded: true });
  }).catch( error => ecb(error));  
}
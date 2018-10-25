import {ADD_TO_CART, 
    REMOVE_FROM_CART, 
    INCREASE_TIMES, 
    DECREASE_TIMES, 
    EMPTY_CART} from '../actions/types';

const initState = {
    cart: []
}

export default function(state = initState, action) {
    const newState = {...state};
    const newCart = newState.cart.length ? [...newState.cart] : [];
    const match = newCart.find((product)=>{
      return product.id === action.id;
    });
    let newProduct;
    if (match) newProduct = {...match};
  
   switch (action.type) {

      case ADD_TO_CART:
        
        let times = 1;
        if (match) {
          newCart = newCart.filter((product) => {
            return product.id !== action.id;
          })
          times = match.times > 0 ? match.times + 1 : 1;
        }
        const newSelection = {
            id: action.id,
            title: action.title,
            price: action.price,
            times: times
        }
        newCart.push(newSelection);
        newState.cart = newCart;
        return newState;
  
      case REMOVE_FROM_CART:

        newCart = newState.cart.filter(product => {
          return product.id !== action.id
        });
        newState.cart = newCart;
        return newState;
  
      case INCREASE_TIMES:

        newCart = newState.cart.filter(product => {
          return product.id !== action.id;
        })
        newProduct.times = ++newProduct.times;
        newCart.push(newProduct);
        newState.cart = newCart;
        return newState;
  
      case DECREASE_TIMES:

        let match = newState.cart.find(product => {
          return product.id === action.id;
        })
        let newCart = newState.cart.filter(product => {
          return product.id !== action.id;
        })
        if (newProduct.times >= 1) newProduct.times = --newProduct.times;
        newCart.push(newProduct);
        newState.cart = newCart; 
        return newState;
  
      case EMPTY_CART:
        newState.cart = [];
        return newState;
      
      default:
        return state;
    }
}
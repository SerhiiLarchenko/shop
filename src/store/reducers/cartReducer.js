import {ADD_TO_CART, 
        REMOVE_FROM_CART, 
        CHANGE_TIMES, 
        EMPTY_CART} from '../actions/types';

const initState = [];

export default function(state = initState, action) {
    
   switch (action.type) {

      case ADD_TO_CART:
      case CHANGE_TIMES:

        const newState = [...state];
        const newProduct = {...action.product};
        const match = state.find((product) => {
          return product.id === action.product.id;
        });
        
        if (match) {
          const index = state.indexOf(match);
          newState[index] = newProduct;
        } else {
          newState.push(newProduct);
        }

        switch (action.type) {

          case ADD_TO_CART:
            
            newProduct.times = match && match.times ? 
              match.times + 1 : 1;
            return newState;
          
          case CHANGE_TIMES: 

            let { times } = action.product;
            newProduct.times = action.sign ? 
              ++times : times > 1 ? --times : 1;
            return newState;
          
          default:
            return newState;

        }

      case REMOVE_FROM_CART:

        return state.filter(product => {
          return product.id !== action.id
        });

      case EMPTY_CART:
        return [];
      
      default:
        return state;
    }
}
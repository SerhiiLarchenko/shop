import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_TIMES, EMPTY_CART} from '../actions/types';

const initState = [];

export default function(state = initState, action) {
    
   switch (action.type) {

      case ADD_TO_CART:

        let match = state.find((product) => {
          return product.id === action.product.id;
        });

        let times = 1;
        let newState = [...state];

        if (match) {
          newState = newState.filter((product) => {
            return product.id !== action.product.id;
          })
          times = match.times > 0 ? match.times + 1 : 1;
        }
        
        const newSelection = {...action.product, times};
        
        newState.push(newSelection);

        return newState;
  
      case REMOVE_FROM_CART:

        return state.filter(product => {
          return product.id !== action.id
        });
  
      case CHANGE_TIMES:
        console.log(action.sign);
        let j = 1;
        if (action.sign) j = action.product.times + 1;
        else if (action.product.times > 1) {
          j = action.product.times - 1;
          console.log(action.product.times, j);
        }
        let test =  state.filter(product => {
          return product.id !== action.product.id;
        });
        let newObj = {...action.product, times: j};
        test.push(newObj);
        return test;

      case EMPTY_CART:

        return [];
      
      default:

        return state;
    }
}
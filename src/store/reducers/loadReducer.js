import { LOAD_PRODUCTS } from '../actions/types';

const initState = [];

export default function (state = initState, action) {
   switch (action.type) {
       case LOAD_PRODUCTS:
            return action.payload;
        default:
            return state;
   }
}
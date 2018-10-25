import { createStore } from 'redux';

import rootReducer from './reducers';

const initState = {
    cart: [],
    cartIsShown: false,
    formIsShown: false
}

const store = createStore(rootReducer, initState);

export default store;
const initState = {
    cart: []
}

const rootReducer = (state=initState, action) => {
   if (action.type === 'ADD_TO_CART') {
       console.log()
       let newCart = state.cart.length ? [...state.cart] : [];

       let newSelection = {
           id: action.id,
           title: action.title,
           price: action.price,
       }
       
       console.log(newSelection);
       newCart.push(newSelection);
       state.cart = newCart;
   }
   console.log(state);
   return state;
}

export default rootReducer;
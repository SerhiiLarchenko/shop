const initState = {
    cart: []
}

const rootReducer = (state=initState, action) => {
  if (action.type === 'ADD_TO_CART') {
    let newCart = state.cart.length ? [...state.cart] : [];
    let match = newCart.find((product)=>{
         return product.id === action.id;
    });

    let times = 1;

    if (match) {
      newCart = newCart.filter((product) => {
        return product.id !== action.id;
      })
      times = match.times > 0 ? match.times + 1 : 1;
    }
    let newSelection = {
        id: action.id,
        title: action.title,
        price: action.price,
        times: times
    }
    
    newCart.push(newSelection);
    state.cart = newCart;
  }
  let newState = {...state}
  console.log(newState);
  return newState;
}

export default rootReducer;
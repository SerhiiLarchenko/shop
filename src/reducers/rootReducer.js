const initState = {
    cart: [],
    cartIsShown: false,
    formIsShown: false
}

const rootReducer = (state=initState, action) => {

  let newState = {...state};

  if (action.type === 'ADD_TO_CART') {
    let newCart = newState.cart.length ? [...newState.cart] : [];
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
    newState.cart = newCart;
  }

  if (action.type === "SHOW_CART_LIST") {
    newState.cartIsShown = true;
  }

  if (action.type === "HIDE_CART_LIST") {
    newState.cartIsShown = false;
  }

  if (action.type === "SHOW_FORM") {
    newState.formIsShown = true;
  }

  if (action.type === "EMPTY_CART") {
    newState.cart = [];
  }

  if (action.type === "HIDE_FORM") {
    newState.formIsShown = false;
  }

  return newState;
}

export default rootReducer;
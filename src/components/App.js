import React from 'react';

import Header from './Header';
import Board from './Board';
import CartIcon from './CartIcon';
import Cart from './Cart';
import Form from './Form';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Board />
      <CartIcon />
      <Cart />
      <Form />
    </div>  
  );
}

export default App;
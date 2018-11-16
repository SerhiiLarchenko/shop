import React, { Component } from 'react';

import Cart from './Cart';
import Form from './Form';
import Header from './Header';
import CartIcon from './CartIcon';
import Shelf from './Shelf';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Shelf />
        <CartIcon />
        <Cart />
        <Form />
      </div>  
    );
  }
}

export default App;
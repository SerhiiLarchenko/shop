import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Product from './components/Product';
import CartList from './components/CartList';
import Form from './components/Form';

class App extends Component {

  state = {
    products : []
  }

  componentWillMount() {
    axios.get('http://localhost:8000/products').then( res => {
      this.setState({
        products: res.data.products
      })
    })
  }

  render() {
    const productList = this.state.products.map(product => {
      return (
        <Product 
          title={product.title} 
          price={product.price} 
          id={product.id}
          key={product.id}
          times={0}
        />
      )
    });

    return (
      <div className="App">
        <Navbar />
        <CartList />
        <Form />
        <div className="container">
          <div className="row">
            {productList}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

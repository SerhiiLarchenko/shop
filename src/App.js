import React, { Component } from 'react';
//import axios from 'axios';

import Navbar from './components/Navbar';
import Product from './components/Product';
import products from './data/products.json';

class App extends Component {

  componentDidMount() {
    /*axios.get("http://localhost/products", {port: 8000}).then(res => {
      console.log(res);
    })*/
  }

  render() {
    const productList = products.products.map(product => {
      return (
        <Product 
          title={product.title} 
          price={product.price} 
          id={product.id}
          key={product.id}
          selections
        />
      )
    });

    return (
      <div className="App">
        <Navbar />
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

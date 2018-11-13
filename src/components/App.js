import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../store/actions/loadAction';

import Navbar from './Navbar';
import Product from './Product';
import CartList from './CartList';
import Form from './Form';

class App extends Component {

  state = {
    loaded: false
  }

  componentWillMount() {
    this.props.loadProducts(this.setState.bind(this));
  }

  render() {
    const productList = this.props.products.map(product => {
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
      this.state.loaded ?
      <div className="App">
        <Navbar />
        <CartList />
        <Form />
        <div className="container">
          <div className="row">
            {productList}
          </div>
        </div>
      </div> :
      <div>loading...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { loadProducts })(App);
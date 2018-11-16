import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../store/actions/loadAction';

import Product from './Product';
import Cart from './Cart';
import Form from './Form';
import Header from './Header';
import CartIcon from './CartIcon';
import Loader from './Loader';

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
      <div className="page">
        <Header />
        <CartIcon />
        <div className="container">
          <div className="row">
            {productList}
          </div>
        </div>
        <Cart />
        <Form />
      </div> :
      <Loader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { loadProducts })(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../store/actions/loadAction';

import Product from './Product';
import Loader from './Loader';

class Shelf extends Component {

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
      <div className="container">
        <div className="row">
        {productList}
        </div>
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

export default connect(mapStateToProps, { loadProducts })(Shelf);
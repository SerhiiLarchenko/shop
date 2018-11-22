import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts } from '../store/actions/loadAction';
import { alertError } from '../store/actions/alertActions';
import { toggleAlert } from '../store/actions/displayActions';

import Product from './Product';
import Loader from './Loader';
import Alert from './Alert';

class Shelf extends Component {

  state = {
    loaded: false
  }

  showAlert = (error) => {
    this.props.alertError(error);
    this.props.toggleAlert(true);
  }

  componentWillMount() {
    this.props.loadProducts(
      this.setState.bind(this),
      this.showAlert
    );
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
        <div className="row row--bottom">
        {productList}
        </div>
      </div> : this.props.alertIsShown ?
        <Alert/> : <Loader />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    alertIsShown: state.display.alertIsShown
  }
}

export default connect(mapStateToProps, { 
  loadProducts, alertError, toggleAlert })(Shelf);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartProduct from './CartProduct.js';
import { toggleCartList, toggleForm } from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

class Cart extends Component {

  hideCart = () => {
    this.props.toggleCartList(false);
  }

  openForm = () => {
    this.props.toggleForm(true);
  }

  empty = () => {
    this.props.emptyCart();
  }

  render() {

    const list = this.props.cart.map((product) => {
      return (
        <CartProduct 
          key={product.id}
          title={product.title}
          price={product.price}
          times={product.times}
          id={product.id}
        />
      )
    });

    return (
      this.props.isShown ? (
        <div className="cart">
        <ul>
          {list}
        </ul>
        <div>
          <button className='btn btn--narrow' onClick={this.openForm}>buy</button>
          <button className='btn btn--narrow' onClick={this.empty}>empty</button>
          <button className='btn btn--narrow' onClick={this.hideCart}>close</button>
          
        </div>
      </div>) : (
        <div></div>
      )
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    cart: state.cart,
    isShown: state.display.cartIsShown

  }
}

export default connect(mapStateToProps, { toggleCartList, toggleForm, emptyCart })(Cart);
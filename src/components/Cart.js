import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartProduct from './CartProduct.js';
import { 
  toggleCartList, toggleForm 
} from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

class Cart extends Component {

  state = {
    msg: 'the cart is empty'
  }

  hideCart = () => {
    this.props.toggleCartList(false);
    this.setState({
      msg: 'the cart is empty'
    })
  }

  openForm = () => {
    if (this.props.cart.length)
      this.props.toggleForm(true);
    else this.setState({
      msg: 'please, add at least one product to make order'
    })
  }

  emptyCart = () => {
    this.props.emptyCart();
  }

  render() {

    const content = this.props.cart.length ?
      this.props.cart.map((product) => {
        return (
          <CartProduct 
            key={product.id}
            title={product.title}
            price={product.price}
            times={product.times}
            id={product.id}
          />
        )
      }) : 
      <div className='cart__empty'>
        {this.state.msg}
      </div>

    return (
      this.props.shown ? 
        <div className="cart">
          <ul>{content}</ul>
          <div>
            <button 
              className='btn btn--narrow' 
              onClick={this.openForm}>
              buy
            </button>
            <button 
              className='btn btn--narrow' 
              onClick={this.emptyCart}>
              empty
            </button>
            <button 
              className='btn btn--narrow' 
              onClick={this.hideCart}>
              close
            </button>
          </div>
      </div> : null
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    cart: state.cart,
    shown: state.display.cart
  }
}

export default connect(mapStateToProps, { 
  toggleCartList, toggleForm, emptyCart 
})(Cart);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCartList } from '../store/actions/displayActions';

class CartIcon extends Component {

  handleClick = () => {
    this.props.toggleCartList(!this.props.shown);    
  }

  render() {

    let inCart = 0;
    if (this.props.cart.length) {
       inCart = this.props.cart.reduce((sum, next) => 
        sum + next.times, 0);
    }

    return (
      <div
        className='cart-icon'
        onClick={this.handleClick}>
        <div className='cart-icon__counter'>
          {inCart}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    shown: state.display.cart
  }
}

export default connect(mapStateToProps, { toggleCartList })(CartIcon);
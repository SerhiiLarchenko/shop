import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { toggleForm } from '../store/actions/displayActions';
import { 
  changeTimes, removeFromCart, emptyCart
} from '../store/actions/cartActions';


class ListElement extends PureComponent {

  hideForm = () => {
    if (this.props.cart.length === 1) {
      this.props.toggleForm(false);
    } 
  }

  removeProduct = () => {
    this.props.removeFromCart(this.props.id);
    this.hideForm();
  }

  plusOrMinus = (sign) => {
     const {title, price, id, times} = this.props; 
     this.props.changeTimes({title,price,id,times}, sign);
     this.hideForm();
  }
    
  render() {

    const { title, price, times} = this.props;

    return (
      <li className='cart-product'>
        <img 
          className='cart-product__image' 
          src={require(`../static/products/${title}.jpg`)} 
          alt="loading..."/>
        <ul>
          <li>{title}</li>
          <li>quantity: {times}</li>
          <li>total: {Math.round(price*times*100)/100}</li>
        </ul>
        <div>
          <button 
            className='btn  btn--narrow' 
            onClick={this.plusOrMinus.bind(null,true)}>
            +
          </button>
          <button 
            className='btn  btn--narrow' 
            onClick={this.plusOrMinus.bind(null,false)}>
            -
          </button>
          <button 
            className='btn  btn--narrow' 
            onClick={this.removeProduct}>
            x
          </button>
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { 
  changeTimes, removeFromCart, emptyCart, toggleForm 
})(ListElement);
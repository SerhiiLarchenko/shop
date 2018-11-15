import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  changeTimes, removeFromCart, emptyCart
} from '../store/actions/cartActions';


class ListElement extends Component {

  removeProduct = () => {
    this.props.removeFromCart(this.props.id);
  }

  plusOrMinus = (sign) => {
     const {title, price, id, times} = this.props; 
     this.props.changeTimes({title,price,id,times}, sign);
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
          <li>total: {price*100*times/100}</li>
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

export default connect(null, { 
  changeTimes, removeFromCart, emptyCart 
})(ListElement);
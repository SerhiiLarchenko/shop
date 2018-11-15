import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { 
  toggleForm, toggleCartList 
} from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

const orderAPI = 'http://localhost:8000/order';

class Form extends Component {

  handleClick = () => {
    this.props.toggleForm(false);
  }

  handleSubmit = (event) => {

    event.preventDefault();
 
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      cart: this.props.cart
    }
  
    axios.post(orderAPI, order).then(res => {
      console.log(res);
    });

    this.props.emptyCart();
    this.props.toggleForm(false);
    this.props.toggleCartList(false);
    
  }

  render() {

    const totalPrice = this.props.cart.reduce((sum, next)=> 
      sum + next.price*100*next.times/100, 0);
  
    return this.props.isShown ? 
      <form 
        className='sub-form' 
        onSubmit={this.handleSubmit}>
        <div>
          <h4>total price: {totalPrice}</h4>
        </div>
        <div>
          <label>name: </label>
          <input 
            className='input' 
            type="text" 
            name="name"/>
        </div>
        <div>
          <label>email: </label>
          <input 
            className='input' 
            type="email" 
            name="email"/>
        </div>
        <div>
          <button className='btn btn--narrow'>
            send
          </button>
          <div 
            className='btn btn--narrow btn--height' 
            onClick={this.handleClick}>
            cancel
          </div>
        </div>
      </form> : null;
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isShown: state.display.formIsShown
  }
}

export default connect(mapStateToProps, { 
  toggleForm, toggleCartList, emptyCart 
})(Form);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { toggleForm, toggleCartList } from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

const orderAPI = 'http://localhost:8000/order';

class Form extends Component {

  handleClick = () => {
    this.props.toggleForm(false);
  }

  handleSubmit = (event) => {
    event.preventDefault();
 
    let order = {
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

    const totalPrice = this.props.cart.reduce((sum, next)=> sum + next.price*100*next.times/100, 0);
  
    return this.props.isShown ? (
        <div style={{
          width: "300px",
          position: "fixed",
          top: "62px",
          left: "calc(50% - 150px)",
          zIndex: "1000",
          backgroundColor: "white"
        }}>
          <form onSubmit={this.handleSubmit}>
            <h4>{totalPrice}</h4>
            <input type="text" name="name"/>
            <input type="email" name="email"/>
            <button >Send</button>
          </form>
          <button onClick={this.handleClick}>close</button>
        </div>
    ) : (<></>);
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isShown: state.display.formIsShown
  }
}

export default connect(mapStateToProps, { toggleForm, toggleCartList, emptyCart })(Form);
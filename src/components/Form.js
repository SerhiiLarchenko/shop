import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { hideForm } from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

class Form extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
 
    let order = {
      name: event.target.name.value,
      email: event.target.email.value,
      cart: this.props.cart
    }
  
    axios.post('http://localhost:8000/order', order).then(res => {
      console.log(res);
    });

    this.props.emptyCart();
    this.props.hideForm();
    
  }

  hideForm = () => {
    this.props.hideForm();
  }

  render() {

    const totalPrice = this.props.cart.cart.reduce((sum, next)=> sum + next.price*100*next.times/100, 0);
  
    return this.props.formIsShown ? (
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
          <button onClick={this.hideForm}>close</button>
        </div>
    ) : (<></>);
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    formIsShown: state.formIsShown
  }
}


/*const mapDispatchToState = dispatch => {
  return {
    emptyCart: () => {
      dispatch({type: "EMPTY_CART"})
    },
    hideForm: () => {
      dispatch({type: "HIDE_FORM"})
    }
  }
}*/

export default connect(mapStateToProps, { hideForm, emptyCart })(Form);
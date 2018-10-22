import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Form extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
 
    let order = {
      name: event.target.name.value,
      email: event.target.email.value,
      cart: this.props.cart
    }
  
    console.log(order);

    axios.post('http://localhost:8000/order', order).then(res => {
      console.log(res);
    });

    this.props.emptyCart();
    this.props.hideForm();
    
  }

  render() {

    const totalPrice = this.props.cart.reduce((sum, next)=> sum + next.price*next.times, 0);
  
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

const mapDispatchToState = dispatch => {
  return {
    emptyCart: () => {
      dispatch({type: "EMPTY_CART"})
    },
    hideForm: () => {
      dispatch({type: "HIDE_FORM"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToState)(Form);
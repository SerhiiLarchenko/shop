import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  state = {
    orders: []
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      orders: [...this.state.orders, {
        name: event.target.name,
        email: event.target.email,
        cart: this.props.cart
      }]
    })

    console.log(this.state);

    this.props.emptyCart();

    console.log(this.props.cart);
    
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToState)(Form);
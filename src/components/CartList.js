import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListElement from './ListElement.js';
import { toggleCartList, toggleForm } from '../store/actions/displayActions.js';

class CartList extends Component {

  hideCart = () => {
    this.props.toggleCartList(false);
  }

  openForm = () => {
    this.props.toggleForm(true);
  }

  render() {

    const list = this.props.cart.map((product) => {
      return (
        <ListElement 
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
        <div className="collection"
          style = {{width: "320px",
                    position: "fixed",
                    top: "62px",
                    right:"10px",
                    zIndex: "1000",
                    backgroundColor: "white",
                    overflowY: "scroll",
                    maxHeight: "500px"}}
        >
        <h6>In cart:<button onClick={this.hideCart}>X</button></h6>
        {list}
        <button onClick={this.openForm}>Buy</button>
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

export default connect(mapStateToProps, { toggleCartList, toggleForm })(CartList);
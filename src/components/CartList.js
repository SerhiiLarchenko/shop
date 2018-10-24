import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListElement from './ListElement';

class CartList extends Component {

  handleClick = () => {
    this.props.hideCartList();
  }

  showForm = () => {
    this.props.showForm();
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
        <h6>In cart:<button onClick={this.handleClick}>X</button></h6>
        {list}
        <button onClick={this.showForm}>Buy</button>
      </div>) : (
        <div></div>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isShown: state.cartIsShown

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideCartList: () => {
       dispatch ({
           type: "HIDE_CART_LIST"
       })
    },
    showForm: () => {
       dispatch ({
         type: "SHOW_FORM"
       })
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
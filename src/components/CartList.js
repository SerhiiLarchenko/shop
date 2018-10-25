import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListElement from './ListElement.js';

import { showForm, hideCartList } from '../store/actions/displayActions';

class CartList extends Component {

  handleClick = () => {
    this.props.hideCartList();
  }

  showForm = () => {
    this.props.showForm();
  }

  render() {
    console.log(this.props);
    const list = this.props.cart.cart.map((product) => {
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

export default connect(mapStateToProps, { hideCartList, showForm })(CartList);
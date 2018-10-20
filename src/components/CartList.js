import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <li key={product.id}>{product.title}: {product.times}</li>
      )
    });

    return (
      this.props.isShown ? (
        <div className="collection"
          style = {{width: "300px",
                    position: "fixed",
                    top: "62px",
                    right:"10px",
                    zIndex: "1000",
                    backgroundColor: "white"}}
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
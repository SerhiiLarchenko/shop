import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {
  render() {
    const list = this.props.cart.map((product) => {
      return (
        <li key={product.id}>{product.title}: {product.times}</li>
      )
    });
    return (
      <div className="collection"
        style = {{width: "300px",
                  position: "fixed",
                  top: "10px",
                  right:"10px",
                  zIndex: "1000"}}
      >
      <h6>In cart:</h6>
        {list}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartList);
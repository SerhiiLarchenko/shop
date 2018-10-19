import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {
  render() {
    console.log(this.props);
    const list = this.props.cart.map((product) => {
      return (
        <li key={product.id}>{product.title}</li>
      )
    });
    return (
      <div className="collection"
        style = {{width: "300px",
                  position: "fixed",
                  top: "10px",
                  right:"10px"}}
      >
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
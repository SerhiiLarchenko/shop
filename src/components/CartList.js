import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NONAME } from 'dns';

class CartList extends Component {
  render() {
    return (
      <div className="collection"
        style = {{width: "300px",
                  position: "fixed",

                  top: "10px",
                  right:"10px"}}
      >
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
    )
  }
}

export default CartList;
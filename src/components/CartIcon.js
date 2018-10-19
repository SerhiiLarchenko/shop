import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartIcon extends Component {

    render() {
        let inCart = this.props.cart.length ? this.props.cart.length : 0;
        return (
           <span>In cart: {inCart}</span> 
        )
    }
}

const mapStateToProps = (state) => {

    return {
      cart: state.cart
    }
}


export default connect(mapStateToProps)(CartIcon);
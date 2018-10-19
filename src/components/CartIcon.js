import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartIcon extends Component {

    render() {
        let inCart = 0;
        if (this.props.cart.length) {
           inCart = this.props.cart.reduce((sum, next) => sum + next.times, 0);
        }
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
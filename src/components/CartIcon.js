import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCartList } from '../store/actions/displayActions';

class CartIcon extends Component {

    handleClick = () => {
        this.props.toggleCartList(!this.props.display);
        
    }

    render() {
        let inCart = 0;
        if (this.props.cart.length) {
           inCart = this.props.cart.reduce((sum, next) => sum + next.times, 0);
        }
        return (
            <>
                <span onClick={this.handleClick}>In cart: {inCart}</span>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
      cart: state.cart,
      display: state.display.cartIsShown
    }
}

export default connect(mapStateToProps, { toggleCartList })(CartIcon);
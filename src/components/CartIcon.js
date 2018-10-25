import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showCartList } from '../store/actions/displayActions';



class CartIcon extends Component {

    handleClick = () => {
        this.props.showCartList();
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
      cart: state.cart
    }
}

/*
const mapDispatchToProps = (dispatch) => {

    return {
        showCartList: () => {
            dispatch ({
                type: "SHOW_CART_LIST"
            })
        }
    }
}*/


export default connect(mapStateToProps, {showCartList})(CartIcon);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeTimes, removeFromCart, emptyCart } from '../store/actions/cartActions';


class ListElement extends Component {

    removeProduct = () => {
        this.props.removeFromCart(this.props.id);
    }

    plusOrMinus = (sign) => {
       const {title, price, id, times} = this.props; 
       this.props.changeTimes({title,price,id,times}, sign);
    }
      
    render() {
        const { title, price, times} = this.props;;
        return (
            <li className="cart-element clearfix">
                <img src={require(`../static/products/${title}.jpg`)} alt="loading..."/>
                <ul>
                    <li>{title}</li>
                    <li>Quantity: {times}</li>
                    <li>Total: {price*100*times/100}</li>
                </ul>
                <div>
                    <button onClick={this.plusOrMinus.bind(null,true)}>+</button>
                    <button onClick={this.plusOrMinus.bind(null,false)}>-</button>
                    <button onClick={this.removeProduct}>Delete</button>
                </div>
            </li>
        )
    }
}


export default connect(null, { changeTimes, removeFromCart, emptyCart })(ListElement);
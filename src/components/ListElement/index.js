import React, { Component } from 'react';
import { connect } from 'react-redux';


import './style.css';

class ListElement extends Component {

    increaseTimes = () => {
        let {times, id} = this.props;
        this.props.increaseTimes(times, id);
    }

    decreaseTimes = () => {
        let {times, id} = this.props;
        this.props.decreaseTimes(times, id);
    }

    removeFromCart = () => {
        this.props.removeFromCart(this.props.id);
    }

    render() {
        const { title, price, times} = this.props;
        console.log(this.props);
        return (
            <li className="cart-element clearfix">
                <img src={require(`../../static/media/${title}.jpg`)} alt="loading..."/>
                <ul>
                    <li>{title}</li>
                    <li>Quantity: {times}</li>
                    <li>Total: {price*100*times/100}</li>
                </ul>
                <div>
                    <button onClick={this.increaseTimes}>+</button>
                    <button onClick={this.decreaseTimes}>-</button>
                    <button onClick={this.removeFromCart}>Delete</button>
                </div>
            </li>
        )
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        increaseTimes: (times,id) => {dispatch({
            type: "INCREASE_TIMES",
            times, id})
        },
        decreaseTimes: (times,id) => {dispatch({
            type: "DECREASE_TIMES",
            times, id})
        },
        removeFromCart: (id) => {dispatch({
            type: "REMOVE_FROM_CART",
            id
        })}
    }
}

export default connect(null, mapDispatchToState)(ListElement);
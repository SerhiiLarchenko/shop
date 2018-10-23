import React, { Component } from 'react';

import './style.css';

class ListElement extends Component {

    render() {
        const { title, price, times} = this.props;
        console.log(this.props);
        return (
            <li className="cart-element clearfix">
                <img src={require(`../../static/media/${title}.jpg`)} alt="loading..."/>
                <ul>
                    <li>{title}</li>
                    <li>Quantity: {times}</li>
                    <li>Total: {price*times}</li>
                </ul>
                <div>
                    <button>+</button>
                    <button>-</button>
                    <button>Delete</button>
                </div>
            </li>
        )
    }
}

export default ListElement;
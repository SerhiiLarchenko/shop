import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../store/actions/cartActions';

class Product extends Component {

  addProduct = () => {
    const { title, price, times, id} = this.props;
    this.props.addToCart({title,price,times,id});
  }

  render() {

    const { title, price } = this.props;

    return (
      <div className="row__col row__col--three">
        <div className="card">
          <img 
            className='card__image' 
            src={require(`../static/products/${title}.jpg`)} 
            alt="loading..."/>
          <h3 className='card__title'>
            {title}
          </h3>
          <p className='card__info'>
            {`$${price}`}
          </p>
          <button 
            className="btn card__btn" 
            onClick={this.addProduct}>
            add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, { addToCart })(Product);
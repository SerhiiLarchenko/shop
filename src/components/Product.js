import React, {Component} from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../store/actions/cartActions';

class Product extends Component {

  handleClick = () => {
    let {id, title, price, times} = this.props;
    this.props.addToCart({id,title,price,times});
  }
  
  render() {
    const { title, price } = this.props;
    return (  
      <div className="col s12 m3">
        <div className="card small">
          <div className="card-image">
            <img src={require(`../static/products/${title}.jpg`)} alt="loading..."/>
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="card-content">
            <p>{`Price: ${price} USD`}</p>
          </div>
          <div className="card-action">
            <button 
              className="waves-effect waves-light btn center"
              onClick={this.handleClick}
            >
              Add to cart
            </button>
          </div>
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
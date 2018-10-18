import React, {Component} from 'react';
import { connect } from 'react-redux';

class Product extends Component {

  handleClick = () => {
    let {id, title, price, selections} = this.props;
    selections = selections === true ? 0 : ++selections;
    this.props.addToCart(id,title,price,selections);
  }
  
  render() {
    const { title, price } = this.props;
    return (  
      <div className="col s12 m3">
        <div className="card small">
          <div className="card-image">
            <img src={require(`../static/media/${title}.jpg`)} alt="loading..."/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id,title,price,selections) => { dispatch({
      type: "ADD_TO_CART",
      id, title, price, selections})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
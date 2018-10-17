import React, {Component} from 'react';

class Product extends Component {
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
            <span>Add to chart</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
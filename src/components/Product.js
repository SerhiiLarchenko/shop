import React, {Component} from 'react';

class Product extends Component {
  state = {
    selections: 0
  }

  handleClick = () => {
    let i = this.state.selections;
    this.setState({
      selections: ++i
    })
    console.log(this.state.selections);
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

export default Product;
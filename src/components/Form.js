import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Joi from 'joi-browser';

import { 
  toggleForm, toggleCartList 
} from '../store/actions/displayActions';
import { emptyCart } from '../store/actions/cartActions';

const orderAPI = 'http://localhost:8000/order';

class Form extends Component {

  state = {
    nameWarning: '',
    emailWarning: '',
    validName: '',
    validEmail: ''
  }

  hideForm = () => {
    this.props.toggleForm(false);
    this.setState({
      nameWarning: '',
      emailWarning: '',
      validName: '',
      validEmail: '' 
    })
  }

  validValue = (value, schema, warning, prop) => {
    const { error } = Joi.validate(value, schema);
      if (error) this.setState({
        [warning]: error.details[0].message
      });
      else this.setState({
        [warning]: '',
        [prop]: value
      });
  }
  
  checkName = (event) => {
    this.validValue(
      {
        name: event.target.forename ? 
          event.target.forename.value : 
            event.target.value
      },
      {
        name: Joi.string().alphanum().min(3).max(30).required()
      },
      'nameWarning',
      'validName'
    )
  }

  checkEmail = (event) => {
    this.validValue(
      {
        email: event.target.email ? 
          event.target.email.value : 
            event.target.value
      },
      {
        email: Joi.string().email().required()
      },
      'emailWarning',
      'validEmail'
    )
  }

  handleSubmit = (event) => {

    event.preventDefault();

    this.checkName(event);
    this.checkEmail(event);  
    
    const {validName, validEmail} = this.state;

    if (validName && validEmail) {
      const order = {
        name: event.target.forename.value,
        email: event.target.email.value,
        cart: this.props.cart
      }

      axios.post(orderAPI, order).then(res => {
        if (res.status === 200) {
          this.props.emptyCart();
          this.props.toggleForm(false);
          this.props.toggleCartList(false);
        }
      }); 
    }    
  }

  render() {

    const totalPrice = this.props.cart.reduce((sum, next)=> 
      Math.round((sum + next.price*next.times)*100)/100, 0);
  
    return this.props.isShown ? 
      <form 
        className='sub-form' 
        onSubmit={this.handleSubmit}>
        <div>
          <h4>total price: {totalPrice}</h4>
        </div>
        <div>
          <input 
            className='input' 
            type="text" 
            name="forename"
            placeholder="name"
            onBlur={this.checkName}/>
          <div className='sub-form__warning'>
            {this.state.nameWarning}
          </div>
        </div>
        <div>
          <input 
            className='input' 
            type="text" 
            name="email"
            placeholder="e-mail"
            onChange={this.checkEmail}/>
          <div className='sub-form__warning'>
            {this.state.emailWarning}
          </div>
        </div>
        <div>
          <button className='btn btn--narrow'>
            send
          </button>
          <div 
            className='btn btn--narrow btn--height' 
            onClick={this.hideForm}>
            cancel
          </div>
        </div>
      </form> : null;
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isShown: state.display.formIsShown
  }
}

export default connect(mapStateToProps, { 
  toggleForm, toggleCartList, emptyCart 
})(Form);
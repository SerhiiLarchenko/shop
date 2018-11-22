import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleAlert } from '../store/actions/displayActions';

class Alert extends Component {

  hideAlert = () => {
    this.props.toggleAlert(false);
  }

  render () {

    const className = this.props.status ? 
      'alert' : 'alert alert--error';
    
    return <div className={className}>
      <div className='alert__info'>
        {this.props.info}
      </div>
      <button 
        className='btn btn__narrow alert__btn'
        onClick={this.hideAlert}>
        ok
      </button>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.alerts.status,
    info: state.alerts.info
  }
}

export default connect(mapStateToProps, { toggleAlert })(Alert);
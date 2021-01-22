import React, { Component } from 'react';
import './style.css';

class Cart extends Component {

  state = {
    flag: false,
  }

  render() {
  return (
    <div className={this.state.flag === true ? 'cart cart_is_red' : 'cart cart_is_green'}>
      <div className='cart_header'>
        <p>Caption</p>
        <input type="checkbox" onClick={this.handleClick}></input>
      </div>
      <p className='cart_text'>
        {this.props.children}
      </p>
    </div>
  )
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag
    });
  }

}

export default Cart
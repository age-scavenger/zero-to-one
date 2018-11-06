import React, { Component } from 'react';

export default class ErrorTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('error');
    }

    return <h3 onClick={this.handleClick}>{this.state.counter}</h3>;
  }
}

import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: ''
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorInfo: String(info.componentStack)
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.errorInfo}</p>;
    }
    return this.props.children;
  }
}

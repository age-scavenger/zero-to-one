import React, { Component } from 'react';

export default class PageB extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location);
  }

  render() {
    return <div>b page</div>;
  }
}

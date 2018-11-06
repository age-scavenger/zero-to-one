import React, { Component } from 'react';

export default class PageA extends Component {
  componentDidMount() {
    console.log(this.props.match.params.which);
  }

  render() {
    return <div>a page</div>;
  }
}

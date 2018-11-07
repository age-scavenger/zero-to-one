import React, { Component } from 'react';

import Life from '../../components/test/life';

export default class PageA extends Component {
  componentDidMount() {
    console.log(this.props.match.params.which);
  }

  render() {
    return (
      <div>
        a page
        <Life />
      </div>
    );
  }
}

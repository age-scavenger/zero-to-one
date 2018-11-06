import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props.route;
    return <div style={{ height: '100%' }}>{renderRoutes(routes)}</div>;
  }
}

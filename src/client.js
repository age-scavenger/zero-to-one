import React, { Component } from 'react';

import ErrorBoundary from '../components/common/ErrorBoundary';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
/**
 * 错误捕捉测试
 */
// import ErrorTest from '../components/common/ErrorTest';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/* <ErrorTest /> */}
        <Router>{renderRoutes(routes)}</Router>
      </ErrorBoundary>
    );
  }
}

import React, { Component } from 'react';

import ErrorBoundary from '../components/common/ErrorBoundary';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from './store';
import { Provider } from 'mobx-react';

const store = new Store();
/**
 * 错误捕捉测试
 */
// import ErrorTest from '../components/common/ErrorTest';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/* <ErrorTest /> */}
        <Provider {...store}>
          <Router>{renderRoutes(routes)}</Router>
        </Provider>
      </ErrorBoundary>
    );
  }
}

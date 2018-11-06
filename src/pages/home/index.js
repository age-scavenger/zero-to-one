import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.less';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.linkToPageB = this.linkToPageB.bind(this);
  }

  linkToPageB() {
    this.props.history.push({
      pathname: '/page-b',
      search: 'a=1&b=2',
      query: {
        id: 1
      },
      state: {
        name: 1
      }
    });
  }

  render() {
    return (
      <div className={styles.home}>
        <h1>home page</h1>
        <Link to="/page-a/xiao-a">link to page A</Link>
        <div onClick={this.linkToPageB}>link to page B</div>
      </div>
    );
  }
}

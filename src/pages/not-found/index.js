//404页面
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          fontSize: 20,
          color: '#333',
          textAlign: 'center',
          paddingTop: '80px'
        }}
      >
        404 not found !<br />
      </div>
    );
  }
}

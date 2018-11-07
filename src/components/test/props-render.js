import React, { Component } from 'react';

export class ChildrenPassJSXObj extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children.name}</div>;
  }
}

export class ChildrenRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'mr.day'
    };
  }

  render() {
    return (
      <div>
        我是元素外层
        {this.props.children(this.state.name)}
      </div>
    );
  }
}

export class PropsRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dcy'
    };
  }
  render() {
    return (
      <div>
        PropsRenderWrapper
        {this.props.render(this.state)}
      </div>
    );
  }
}

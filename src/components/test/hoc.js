import React, { Component } from 'react';

const WrapperTitle = OriginComponent =>
  class Title extends Component {
    constructor(props) {
      super(props);
      this.state = {
        secondTitle: 'SecondTitle'
      };
    }

    render() {
      return (
        <OriginComponent {...this.props} secondTitle={this.state.secondTitle} />
      );
    }
  };

function originTitle({ secondTitle }) {
  return (
    <div>
      hello,HOC
      <h2>{secondTitle}</h2>
    </div>
  );
}

export default WrapperTitle(originTitle);

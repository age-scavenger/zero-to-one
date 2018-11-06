import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styles from './index.less';

@inject('home')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ''
    };
    this.linkToPageB = this.linkToPageB.bind(this);
    this.updateCurrentValue = this.updateCurrentValue.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  componentDidMount() {
    console.log(this.props.home);
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

  updateCurrentValue(e) {
    console.log(e.target.value);
    this.setState({
      currentValue: e.target.value
    });
  }

  addListItem() {
    const { home } = this.props;
    console.log(home);
    home.addListItem(this.state.currentValue);
    this.setState({
      currentValue: ''
    });
  }

  render() {
    return (
      <div className={styles.home}>
        <h1>home page</h1>
        <Link to="/page-a">link to page A</Link>
        <div onClick={this.linkToPageB}>link to page B</div>
        <h3>list:</h3>
        <ul>
          {this.props.home.list.map((item, index) => {
            return (
              <li key={index + item}>
                {index}.{item}
              </li>
            );
          })}
        </ul>
        <div>
          list.length:
          {this.props.home.listLength}
        </div>

        <input
          type="text"
          value={this.state.currentValue}
          onChange={this.updateCurrentValue}
        />
        <button onClick={this.addListItem}>添加list</button>
      </div>
    );
  }
}

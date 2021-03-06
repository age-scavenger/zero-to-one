import React, { Component } from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import styles from "./index.less";

import { Badge } from "antd";

import WrapperTitle from "../../components/test/hoc";
import {
  ChildrenPassJSXObj,
  ChildrenRender,
  PropsRender
} from "../../components/test/props-render";

import A from "../../components/test/a";
import B from "../../components/test/b";

@inject("home")
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: ""
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
      pathname: "/page-b",
      search: "a=1&b=2",
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
      currentValue: ""
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
        <div>
          <Badge count={0} showZero>
            <a href="#" className="head-example" />
          </Badge>
        </div>
        <WrapperTitle />

        <ChildrenPassJSXObj>{{ name: "day" }}</ChildrenPassJSXObj>

        <ChildrenRender>
          {name => <div style={{ color: "black" }}>{name}</div>}
        </ChildrenRender>

        <PropsRender
          render={({ name }) => <div style={{ color: "blue" }}>{name}</div>}
        />
        <A />
        <B />
      </div>
    );
  }
}

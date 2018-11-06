import React, { Component } from 'react';

import { Card, Form, Input, Button, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

import styles from './index.less';

class LoginBox extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名..."
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码..."
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住密码</Checkbox>)}
          <a className={styles.forgetPassword} href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登陆
          </Button>
          <a href="">立即注册!</a>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(LoginBox);

export default class Login extends Component {
  render() {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginBoxWrapper}>
          <Card className={styles.loginBox}>
            <LoginForm />
          </Card>
        </div>

        <footer className={styles.footer}>Copyright@ 2018 Day</footer>
      </div>
    );
  }
}

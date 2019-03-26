/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css';
import ReactSVG from 'react-svg'
import imgURL from '../../../svg/GraphFont.svg'
import { observer } from 'mobx-react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

// login-header
const LoginHeader = () => {
    return (
        <div className="login-header">
            <ReactSVG src={imgURL} alt="graph"/>
            <span>Welcome to Smartio graph ,Please log into your account</span>
        </div>
    )
}

// login-footer
const LoginFooter = () => {
    return (
        <div className="login-footer"></div>
    )
}

@observer class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="user-login">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <LoginHeader/>
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </Form.Item>
            </Form>
            <LoginFooter/>
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm
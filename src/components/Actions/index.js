import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout

class Action extends Component {
    render() {
        return (
            <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
                Content
            </Content>
        )
    }
}

export default Action
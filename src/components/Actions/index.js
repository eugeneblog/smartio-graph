import React, { Component } from 'react';
import TabPanel from './TapPanel'
import { Layout } from 'antd';
const { Content } = Layout

class Action extends Component {
    render() {
        return (
            <Content id="mainContainer" className="action"
            >
                <TabPanel/>
            </Content>
        )
    }
}

export default Action
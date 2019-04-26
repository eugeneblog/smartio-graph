import React from 'react';
import TabPanel from './TapPanel'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd';
const { Content } = Layout

@inject(allStore => {
    return allStore.appstate
}) @observer class Action extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    onChange = (activeKey) => {
        this.props.actionstate.changeKey(activeKey)
    }
    render() {
        return (
            <Content id="mainContainer" className="action"
            >
                <TabPanel
                panes={this.props.actionstate.present.tabPanes}
                activeKey={this.props.actionstate.present.activeKey}
                onChange={this.onChange}
                />
            </Content>
        )
    }
    // 这个钩子监听action数据变化，更新未来和过去栈
    componentDidUpdate() {
        console.log('update')
    }
}

export default Action
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
    render() {
        return (
            <Content id="mainContainer" className="action"
            >
                <TabPanel
                panes={this.props.actionstate.getPresent.tabPanes}
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
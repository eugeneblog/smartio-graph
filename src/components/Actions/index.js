import React from 'react';
import TabPanel from './TapPanel'
import { observer, inject } from 'mobx-react'
import { Layout, Modal, message } from 'antd';
const { Content } = Layout

@inject(allStore => {
    return allStore.appstate
}) @observer class Action extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            panes: this.props.actionstate.present.tabPanes,
            activeKey: this.props.actionstate.present.activeKey
        }
    }
    onChange = (activeKey) => {
        this.props.actionstate.changeKey(activeKey)
        this.setState({
            activeKey: this.props.actionstate.present.activeKey
        })
    }
    onAdd = () => {
        this.props.actionstate.addPanes()
        this.setState({
            panes: this.props.actionstate.present.tabPanes
        })
        message.success(`New page 'New Tab' successfully added`)
    }
    onRemove = (targetKey) => {
        this.setState({
            targetKey
        }, () => {
            this.showModal()
        })
    }
    showModal = () => {
        this.setState({
          visible: true,
        })
    }
    handleOk = (e) => {
        let targetKey = this.state.targetKey
        let activeKey = this.state.activeKey
        let data = this.props.actionstate.removePanes(targetKey, activeKey)
        this.setState({ ...data, panes: this.props.actionstate.present.tabPanes })
      }
    
    handleCancel = (e) => {
        this.setState({
            visible: false,
        })
    }
    render() {
        return (
            <Content id="mainContainer" className="action"
            >
                <TabPanel
                    panes={this.state.panes}
                    activeKey={this.state.activeKey}
                    onChange={this.onChange}
                    onRemove={this.onRemove}
                    onAdd={this.onAdd}
                />
                <Modal
                    title="Waring"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    key="modal"
                >
                    <p>Your page has not been saved. Do you want to save it</p>
                </Modal>
            </Content>
        )
    }
    // 这个钩子监听action数据变化，更新未来和过去栈
    componentDidUpdate() {
        console.log('update')
    }
}

export default Action
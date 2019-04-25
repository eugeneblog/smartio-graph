import React from 'react'
import { Tabs, message, Modal } from 'antd';
import { observer, inject } from 'mobx-react'
import ActionPanel from './Panel'

const TabPane = Tabs.TabPane;

@inject(allStore => {
  return allStore.appstate
}) @observer class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: this.props.actionstate.getPresent.tabPanes[0].key,
      visible: false 
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  
  add = () => {
    this.props.actionstate.addPanes()
    message.success(`New page 'New Tab' successfully added`)
  }

  remove = (targetKey) => {
    // 如果没有保存弹出提示框，让用户进一步确认是否要做关闭操作
    this.setState({
      targetKey
    }, () => {
      this.showModal()
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    let targetKey = this.state.targetKey
    let activeKey = this.state.activeKey
    let data = this.props.actionstate.removePanes(targetKey, activeKey)
    console.log(data)
    this.setState({ ...data })
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return [
      <Tabs
        className="action-tabs"
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        tabPosition="bottom"
        key="tabs"
      >
        {
          this.props.panes.map(
                pane => 
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    <ActionPanel paneId = {`drawing${pane.key}`}/>
                </TabPane>
            )
        }
      </Tabs>,
      <Modal
          title="Waring"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          key="modal"
        >
          <p>Your page has not been saved. Do you want to save it</p>
      </Modal>
    ];
  }
}

export default TabPanel

import React from 'react'
import { Tabs } from 'antd';
import { observer, inject } from 'mobx-react'
import ActionPanel from './Panel'

const TabPane = Tabs.TabPane;

@inject(allStore => {
  return allStore.appstate
}) @observer class TabPanel extends React.Component {
  
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  
  add = () => {
    this.props.onAdd()
  }

  remove = (targetKey) => {
    this.props.onRemove(targetKey)
  }

  render() {
    return [
      <Tabs
        className="action-tabs"
        onChange={this.props.onChange}
        activeKey={this.props.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        tabPosition="bottom"
        key="tabs"
      >
        {
          this.props.panes.map(
                pane => 
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    <ActionPanel 
                    paneId = {`drawing${pane.key}`}
                    paneData= {pane}
                    />
                </TabPane>
            )
        }
      </Tabs>
    ]
  }
}

export default TabPanel

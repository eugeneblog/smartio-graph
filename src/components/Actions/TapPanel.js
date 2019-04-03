import React from 'react'
import { Tabs } from 'antd';
import ActionPanel from './Panel'

const TabPane = Tabs.TabPane;

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', key: '1', closable: false },
      { title: 'Tab 2', key: '2' },
      { title: 'Tab 3', key: '3' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <Tabs
        className="action-tabs"
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        tabPosition="bottom"
      >
        {
            this.state.panes.map(
                pane => 
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                    <ActionPanel paneId = {`drawing${pane.key}`}/>
                </TabPane>
            )
        }
      </Tabs>
    );
  }
}

export default TabPanel

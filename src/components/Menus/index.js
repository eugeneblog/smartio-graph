/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Menu, Dropdown, message } from 'antd'
import { Logo } from "../Logo/index";
const SubMenu = Menu.SubMenu;

const menuList = [{
  'text': 'file',
  'overlay': 'fileMenu',
  'children': [{
    'text': 'New',
    'name': 'newTabPanelHandle',
    'shortcutKey': 'Ctrl+N'
  }, {
    'text': 'Open From',
    'shortcutKey': 'Ctrl+O',
    'children': [{
      'text': 'device...',
      'name': 'openFromDevice'
    }, {
      'text': 'URL',
      'name': 'openFromUrl'
    }]
  }, {
    'text': 'Save',
    'shortcutKey': 'Ctrl+S',
    'name': 'saveFileHandle'
  }, {
    'text': 'Save as...',
    'shortcutKey': 'Ctrl+Alt+S',
    'name': 'saveAsHandle'
  }]
}, {
  'text': 'view',
  'overlay': 'ViewMenu',
  'children': [{
    'text': 'Outline',
    'shortcutKey': 'Ctrl+Shift+P',
    'name': 'showOutline',
    'isUse': false
  }, {
    'text': 'Layers',
    'shortcutKey': 'Ctrl+Shift+L',
    'name': 'showLayers',
    'isUse': false
  }, {
    'text': 'Format Panel',
    'shortcutKey': 'Ctrl+Shift+O',
    'name': 'showFormat',
    'isUse': false
  }]
}]
// 菜单点击事件
const menuOnClick = ({ key }) => {
  message.info(`Click on item ${key}`)
}

class Menus extends Component {
  // 递归调用菜单
  recursionMenu = (list) => {
    return list.map((item) => {
      if(!item.children) {
        return (
          <Menu.Item className="smartIO-menu" key={ item.name }>
            <a target="_blank" rel="noopener noreferrer" >
              { item.text }
              <span>{ item.shortcutKey || '' }</span>
            </a>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu title={ item.text } key={ item.text }>
            {
              this.recursionMenu(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  render() {
    return (
      <div className="header">
        <Logo />
        <Menu
            mode="horizontal"
        >
          {
            menuList.map((e, i) => {
              return (
                <Dropdown overlay={
                  <Menu onClick={menuOnClick}>
                    {
                      this.recursionMenu(e.children)
                    }
                  </Menu>
                } key={i}>
                    <a className="ant-dropdown-link" href="javascript:void(0);">
                    {e.text}
                    </a>
                </Dropdown> 
              )
            })
          }
        </Menu>
      </div>
    )
  }
}

export default Menus
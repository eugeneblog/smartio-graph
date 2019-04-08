/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Menu, Dropdown} from 'antd'
import { Logo } from "../Logo/index";
const menuList = [{
  'name': 'file',
  'overlay': 'fileMenu',
  'children': [{
    'name': 'New',
    'shortcutKey': 'Ctrl+N'
  }, {
    'name': 'Open From',
    'shortcutKey': 'Ctrl+O',
    'children': [{
      'name': 'device...'
    }, {
      'name': 'URL'
    }]
  }, {
    'name': 'Save',
    'shortcutKey': 'Ctrl+S'
  }, {
    'name': 'Save as...',
    'shortcutKey': 'Ctrl+Alt+S'
  }]
}, {
  'name': 'view',
  'overlay': 'ViewMenu',
  'children': [{
    'name': 'Outline',
    'shortcutKey': 'Ctrl+Shift+P',
    'isUse': false
  }, {
    'name': 'Layers',
    'shortcutKey': 'Ctrl+Shift+L',
    'isUse': false
  }, {
    'name': 'Format Panel',
    'shortcutKey': 'Ctrl+Shift+O',
    'isUse': false
  }]
}]

class Menus extends Component {
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
                            <Menu>
                              {
                                e.children.map((item) => {
                                  return (
                                    <Menu.Item className="smartIO-menu" key={item.name}>
                                      <a target="_blank" rel="noopener noreferrer" >
                                        {item.name}
                                        <span>{item.shortcutKey || ''}</span>
                                      </a>
                                    </Menu.Item>
                                  )
                                })
                              }
                            </Menu>
                          } key={i}>
                              <a className="ant-dropdown-link" href="javascript:void(0);">
                              {e.name}
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
/* eslint-disable jsx-a11y/anchor-is-valid */
/* global d3 */
import React from 'react'
import toolFn from '../../utils/ToolFn'
import {Menu, Dropdown, message } from 'antd'
import { observer,inject } from 'mobx-react'
import { Logo } from "../Logo/index";
const SubMenu = Menu.SubMenu;

const menuList = [{
  'text': 'file',
  'overlay': 'fileMenu',
  'children': [{
    'text': 'New',
    'handle': 'newTabPanelHandle',
    'shortcutKey': 'Ctrl+N'
  }, {
    'text': 'Open From',
    'shortcutKey': 'Ctrl+O',
    'children': [{
      'text': 'device...',
      'handle': 'openFromDevice'
    }]
  }, {
    'text': 'Save',
    'shortcutKey': 'Ctrl+S',
    'handle': 'saveFileHandle'
  }, {
    'text': 'Save as...',
    'shortcutKey': 'Ctrl+Alt+S',
    'handle': 'saveAsHandle'
  }]
}, {
  'text': 'view',
  'overlay': 'ViewMenu',
  'children': [{
    'text': 'Outline',
    'shortcutKey': 'Ctrl+Shift+P',
    'handle': 'showOutline',
    'isUse': false
  }, {
    'text': 'Layers',
    'shortcutKey': 'Ctrl+Shift+L',
    'handle': 'showLayers',
    'isUse': false
  }, {
    'text': 'Format Panel',
    'shortcutKey': 'Ctrl+Shift+O',
    'handle': 'showFormat',
    'isUse': false
  }]
}]
// 菜单点击事件
const menuOnClick = function({item, key}) {
  const { handle } = item.props
  // 在当前对象Menu中找到 handle方法并执行对应的事件回调, 事件回调接收一个参数, self: MenuItem
  this[handle](item)
}

class MenuController extends React.Component {
  // File New
  newTabPanelHandle = (self) => {
    this.props.mainstate.addPanes()
    message.success(`New page 'New Tab' successfully added`)
  }
  // Open
  openFromDevice = (self) => {

  }
  // Save
  saveFileHandle = (self) => {
    let idStr = toolFn.GenNonDuplicateID()
    let htmlStr = d3.select('#drawing1').html()
    // 使用Blob 类文件对象
    var blob = new Blob(
    [`<mxfile modified='${new Date()}' host='localhost'>
    <diagram name="Page-1" id="${idStr}">
    `,
    htmlStr,
    '</diagram></mxfile>'
    ],
    {type : 'application/xml'})

    var a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = "MapByMathArtSys.xml"  //设定下载名称
    a.click() //点击触发下载
  }
  // Save As
  saveAsHandle = (self) => {

  }
  // View Outline
  showOutline = (self) => {

  }
  // Layers
  showLayers = (self) => {

  }
  // Format Panel
  showFormat = (self) => {

  }
}

// 因为菜单是总控，基本上所有操作都是更改数据模型, 所以必须注入页面所有数据
@inject(allStore => allStore.appstate) @observer 
class Menus extends MenuController{
  // 递归调用菜单
  recursionMenu = (list) => {
    return list.map((item) => {
      if(!item.children) {
        return (
          <Menu.Item className="smartIO-menu" key={ item.text } handle={ item.handle }>
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
                <Dropdown
                overlay={
                  <Menu onClick={ (k) => menuOnClick.bind(this)(k) }>
                    {
                      this.recursionMenu(e.children)
                    }
                  </Menu>
                }
                key={i}
                >
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
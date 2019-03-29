/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Menu, Dropdown} from 'antd'
import { Logo } from "../Logo/index";

const EditMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" >3rd menu item</a>
      </Menu.Item>
    </Menu>
)

class Menus extends Component {
    render() {
        const fileMenu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >3rd menu item</a>
              </Menu.Item>
            </Menu>
        );
        
        const ViewMenu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" >3rd menu item</a>
              </Menu.Item>
            </Menu>
        )
        return (
            <div className="header">
                <Logo />
                <Menu
                    mode="horizontal"
                >
                    <Dropdown overlay={fileMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">
                        File
                        </a>
                    </Dropdown>
                    <Dropdown overlay={ViewMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">
                        View
                        </a>
                    </Dropdown>
                    <Dropdown overlay={EditMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">
                        Edit
                        </a>
                    </Dropdown>
                    <Dropdown overlay={EditMenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0);">
                        Help
                        </a>
                    </Dropdown>
                </Menu>
            </div>
        )
    }
}

export default Menus
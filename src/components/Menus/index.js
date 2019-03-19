import React, { Component } from 'react'
import {Menu, Icon} from 'antd'
import { Logo } from "../Logo/index";
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Menus extends Component {
    state = {
        current: 'mail',
    }
    
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    
    render() {
        return (
            <div className="header">
                <Logo />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="folder" />File</span>}>
                        <MenuItemGroup>
                            <Menu.Item key="file:1">New</Menu.Item>
                            <Menu.Item key="file:2">Open...</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="laptop" />View</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="view:1">Option 1</Menu.Item>
                            <Menu.Item key="view:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="smile" />Help</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="help:1">Option 1</Menu.Item>
                            <Menu.Item key="help:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default Menus
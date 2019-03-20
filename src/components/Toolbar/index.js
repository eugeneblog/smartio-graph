import { Button, Icon, Menu, Dropdown } from 'antd';
import React,{ Component } from 'react';
const ButtonGroup = Button.Group;

class Toolbar extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="1">Format Panel <span className="shortcut-text">Cmd+Shift+P</span></Menu.Item>
              <Menu.Item key="2">Layers <span className="shortcut-text">Cmd+Shift+L</span></Menu.Item>
              <Menu.Item key="3">Outline <span className="shortcut-text">Cmd+Shift+O</span></Menu.Item>
            </Menu>
        );
        return(
            <div className='toolbar'>
                <ButtonGroup>
                    <Dropdown overlay={menu}>
                        <Button size="small"><Icon type="layout"/><Icon type="down" /></Button>
                    </Dropdown>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="small"><Icon type="zoom-in" /></Button>
                    <Button size="small"><Icon type="zoom-out" /></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="small"><Icon type="caret-left" /></Button>
                    <Button size="small"><Icon type="caret-right" /></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="small"><Icon type="delete" /></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="small"><Icon type="fullscreen" /></Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Toolbar
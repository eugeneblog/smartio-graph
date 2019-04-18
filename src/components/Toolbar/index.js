import { Button, Icon, Menu, Dropdown } from 'antd';
import React,{ Component } from 'react';
const ButtonGroup = Button.Group;

const toolList = [{
    id: '1',
    type: 'drapdown',
    name: 'layout',
    icon: 'layout',
    menu: [{
        id: '1',
        text: 'Format Panel',
        shortCut: 'Cmd+Shift+P'
    }, {
        id: '2',
        text: 'Layers',
        shortCut: 'Cmd+Shift+L'
    }, {
        id: '3',
        text: 'Outline',
        shortCut: 'Cmd+Shift+O'
    }]
}, '-', {
    id: '2',
    type: 'button',
    name: 'amplification',
    icon: 'zoom-in'
}, {
    id: '3',
    type: 'button',
    name: 'narrow',
    icon: 'zoom-out'
}, '-', {
    id: '4',
    type: 'button',
    name: 'fallback',
    icon: 'caret-left'
}, {
    id: '5',
    type: 'button',
    name: 'fallbackOut',
    icon: 'caret-left'
}, '-', {
    id: '6',
    type: 'button',
    namee: 'delete',
    icon: 'delete'
}]

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
                <ButtonGroup style={{"float": "right"}}>
                    <Button size="small"><Icon type="tool" /></Button>
                    <Button size="small"><Icon type="fullscreen" /></Button>
                </ButtonGroup>
            </div>
        )
    }
    createToolBar = () => {
        
    }
}

export default Toolbar
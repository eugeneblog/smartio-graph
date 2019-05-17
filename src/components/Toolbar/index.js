import { Button, Icon, Menu, Dropdown } from 'antd';
import React from 'react';
import ToolbarController from './Controller'
import { observer, inject } from 'mobx-react'
// import { instanceOf } from 'prop-types';
const ButtonGroup = Button.Group;

@inject(allStore => allStore.appstate)  @observer
class Toolbar extends ToolbarController {
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
                    <Button onClick={this.zoomInHandle} size="small"><Icon type="zoom-in"/></Button>
                    <Button onClick={this.zoomOutHandle} size="small"><Icon type="zoom-out"/></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={this.undoHandle} size="small"><Icon type="caret-left" /></Button>
                    <Button onClick={this.redoHandle} size="small"><Icon type="caret-right" /></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={this.deleteHandle} size="small"><Icon type="delete" /></Button>
                </ButtonGroup>
                <ButtonGroup style={{"float": "right"}}>
                    <Button onClick={this.showProperty} size="small"><Icon type="tool" /></Button>
                    <Button onClick={this.changeFullscree} size="small"><Icon type="fullscreen" /></Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default Toolbar
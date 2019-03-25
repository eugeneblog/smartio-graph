import React, { Component } from 'react';
import { Layout } from 'antd';
import SlideBarBtn from './SlideBarBtn'
import Shapes from './Shapes/index.js'
const { Sider } = Layout;

class SlideBar extends Component {
    state = {
        sliderWidth: 200
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    // 改变slidebar 的宽度
    slideChangeHandle(e) {
        let dw = e.dw
        let move = e.DX - e.CX
        this.setState({
            sliderWidth: dw + move
        })
    }
   
    render() {
        return (
            <Sider
            width={this.state.sliderWidth}
            className="slidebar"
            style={{ background: '#fff' }}
            >
                <SlideBarBtn slideWidth={this.state.sliderWidth} onSlideChange={this.slideChangeHandle.bind(this)}/>
                <Shapes/>
            </Sider>
        )
    }
}

export default SlideBar
import React, { Component } from 'react';
import appshapes from '../../store/modules/shapes'
import { Layout } from 'antd';
import SlideBarBtn from './SlideBarBtn'
import Shapes from './Shapes/index.js'
const { Sider } = Layout;

class SlideBar extends Component {
    constructor() {
        super()
        this.state = {
            sliderWidth: 200
        }
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
            id="slidrContainer"
            width={this.state.sliderWidth}
            className="slidebar"
            style={{ background: '#fff' }}
            >
                <SlideBarBtn slideWidth={this.state.sliderWidth} onSlideChange={this.slideChangeHandle.bind(this)}/>
                <Shapes
                    appshapes={appshapes}
                    slideWidth={this.state.sliderWidth}
                />
            </Sider>
        )
    }
}

export default SlideBar
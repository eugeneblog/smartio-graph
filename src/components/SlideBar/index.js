import React, { Component } from 'react';
import appshapes from '../../store/modules/shapes'
import { observer } from 'mobx-react'
import { Layout } from 'antd';
import SlideBarBtn from './SlideBarBtn'
import Shapes from './Shapes/index.js'
const { Sider } = Layout;

@observer class SlideBar extends Component {
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
            width={this.state.sliderWidth}
            className="slidebar"
            style={{ background: '#fff' }}
            >
                <SlideBarBtn slideWidth={this.state.sliderWidth} onSlideChange={this.slideChangeHandle.bind(this)}/>
                <Shapes appshapes={appshapes}/>
            </Sider>
        )
    }
}

export default SlideBar
import React, { Component } from 'react';
import { Layout, Collapse } from 'antd';
import SlideBarBtn from './SlideBarBtn'
const { Sider } = Layout;
const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function callback(key) {
    console.log(key);
}


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
        window.slideWidth = 200
        return (
            <Sider
            width={this.state.sliderWidth}
            className="slidebar"
            style={{ background: '#fff' }}
            >
                <SlideBarBtn slideWidth={this.state.sliderWidth} onSlideChange={this.slideChangeHandle.bind(this)}/>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
            </Sider>
        )
    }
}

export default SlideBar
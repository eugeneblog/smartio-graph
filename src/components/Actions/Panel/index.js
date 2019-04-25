/* global Snap */ 
/* global d3 */
import React from 'react'
import ChoiceBox from './ChoiceBox'
// import Graph from '../../Graph/index'

class ActionPanel extends React.Component {
    constructor() {
        super()
        this.state = {
            storage: {

            },
            choiceStyle: {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            }
        }
    }
    render() {
        return(
            <div id={this.props.paneId} className="action-container">
                <svg></svg>
                <ChoiceBox
                isShow = {this.state.choiceBoxIsShow}
                choiceBoxStyle = {this.state.choiceStyle}
                />
            </div>
        )
    }
    componentDidMount() {
        let _this = this
        let paneId = _this.props.paneId
        Snap(`#${this.props.paneId} > svg`)
        // 添加鼠标选择框
        // 默认不允许框选
        let mouseOn = false
        let startX = 0
        let startY = 0
        function mousedownHandle (e) {
            _this.clearEventBubble(e)
            if (e.buttons !== 1 || e.which !== 1) return;
            mouseOn = true;
             // _nHeight: navbar的高度, _sWidth: slide的宽度 ，鼠标点击的距离 - slide的宽度 = _x鼠标与画板左边缘的距离，同理_y 是鼠标距离画板顶部的距离
            let _nHeight = d3.select('#mainContainer').node().offsetTop
            let _sWidth = d3.select('#slidrContainer').node().offsetWidth
            // 调整坐标原点为容器左上角
            startX = e.clientX - _sWidth;
            startY = e.clientY - _nHeight;
            _this.setState({
                choiceBoxIsShow: true,
                choiceStyle: {
                    top: startY,
                    left: startX
                }
            })
            document.onmousemove = function (e) {
                if (!mouseOn) return;
                _this.clearEventBubble(e);
                // var selectContainer = document.getElementById(`${_this.props.paneId}`);
                let _x = e.clientX - _sWidth;
                let _y = e.clientY - _nHeight;
                // 框选区域的top值为 当前点击的top值与第一次点击的top值直接的最小值，left同理
                // 框选区域的宽度为，第一次点击的clientX值减去移动后的clientX值的绝对值, 例如，（100 - 200） = -100：宽度为100px, （200-100）= 100：宽度也是100px，所以必须是绝对值
                _this.setState({
                    choiceStyle: {
                        top: Math.min(_y, startY),
                        left: Math.min(_x, startX),
                        width: Math.abs(_x - startX),
                        height: Math.abs(_y - startY)
                    }
                })
            }
            document.onmouseup = function (e) {
                if (!mouseOn) return;
                _this.clearEventBubble(e);
                _this.setState({
                    choiceBoxIsShow: false
                })
                mouseOn = false;
            };
        }
        let container = document.getElementById(`${paneId}`)
        container.onmousedown = mousedownHandle
        
    }

    clearEventBubble (e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;
  
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    }
}

export default ActionPanel
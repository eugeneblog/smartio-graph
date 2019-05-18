/* global Snap */ 
/* global d3 */
import React from 'react'
import ChoiceBox from './ChoiceBox'
// import Graph from '../../Graph/index'

class ActionPanel extends React.Component {
    constructor() {
        super()
        this.state = {
            sWidth: 2000,
            sHeight: 1800,
            gridLength: 20,
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
            <div 
            id={this.props.paneId} 
            className="action-container">
                <svg 
                width={this.state.sWidth} 
                height={this.state.sHeight} 
                onMouseDown = {this.drawMousedownHandle}>
                    <g className="svgPanel">
                        <g className="grid">
                            <desc>网格线</desc>
                            {
                                /* 绘制网格线 */
                                this.createDrawLines(this.state.gridLength)
                            }
                        </g>
                        <g className="baseLayer">
                            <g className="editCon">
                                <desc>编辑控件</desc>
                            </g>
                            <g 
                            className="eleGroup"
                            style={{cursor: "move"}}
                            onMouseEnter = {this.eventMouseEnterHandle}
                            onMouseDown = {this.eventMouseDownHandle}
                            onClick = {this.eventClickHandle}
                            >
                                <desc>基础元素</desc>
                            </g>
                        </g>
                    </g>
                </svg>
                <ChoiceBox
                isShow = {this.state.choiceBoxIsShow}
                choiceBoxStyle = {this.state.choiceStyle}/>
            </div>
        )
    }
    componentDidMount() {
        let s = Snap(`#${this.props.paneId} > svg .eleGroup`)
        // this.init(s)
        let bigCircle = s.circle(150,150,150)
        bigCircle.attr({
            fill: "#bada55"
        })
        var smallCircle = s.circle(100, 150, 70);
        // Lets put this small circle and another one into a group:
        s.group(smallCircle, s.circle(200, 150, 70));

    }
    init(svg) {
        console.log(svg)
    }
    // 元素拖动
    eventMouseDownHandle = (e) => {
        this.clearEventBubble(e)
        console.log(e.target)
    }

    // 鼠标停留在元素上
    eventMouseEnterHandle = (e) => {
        this.clearEventBubble(e)
        console.log(e.target)
    }

    // 元素点击
    eventClickHandle = (e) => {
        console.log(e.target)
    }
    
    // 绘制网格
    createDrawLines(gridLength) {
        let _this = this
        let Wlen = Math.ceil(_this.state.sWidth / gridLength)
        let Hlen = Math.ceil(_this.state.sHeight / gridLength)
        let lines = []
        for (let i = 0; i < Wlen; i++) {
            lines.push(
                <line
                key = {`w${i}`}
                x1 = {i * gridLength}
                y1 = {0}
                x2 = {i * gridLength}
                y2 = {_this.state.sHeight}
                stroke = "#e5e5e5"
                ></line>
            )
        }
        for (let i = 0; i < Hlen; i++) {
            lines.push(
                <line
                key = {`h${i}`}
                x1 = {0}
                y1 = {i * gridLength}
                x2 = {_this.state.sWidth}
                y2 = {i * gridLength}
                stroke = "#e5e5e5"
                ></line>
            )
        }
        return lines
    }

    drawMousedownHandle = (e) => {
        // e.persist()
        let _this = this
        let mouseOn = false
        let startX = 0
        let startY = 0
        _this.clearEventBubble(e)
        if (e.buttons !== 1) return
        // if (e.buttons !== 1 || e.which !== 1) return;
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

    // 阻止事件默认行为，防止事件继续传播执行
    clearEventBubble (e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;
  
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    }
}

export default ActionPanel
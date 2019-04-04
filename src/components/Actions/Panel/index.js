/* global SVG */ 
/* global d3 */
import React from 'react'
import ChoiceBox from './ChoiceBox'

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
        let draw = SVG().addTo(`#${paneId}`)
        // 添加鼠标选择框
        // 默认不允许框选\
        let mouseOn = false
        let startX = 0
        let startY = 0
        function mousedownHandle (e) {
            _this.clearEventBubble(e)
            if (e.buttons !== 1 || e.which !== 1) return;
            mouseOn = true;
            // 调整坐标原点为容器左上角
            startX = e.clientX - 202;
            startY = e.clientY - 86;
            console.log(startX, startY)
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
                var selectContainer = document.getElementById(`${_this.props.paneId}`);
                var _x = e.clientX - 202 + selectContainer.scrollLeft;
                var _y = e.clientY - 86 + selectContainer.scrollTop;
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
        let container = document.getElementById(`${_this.props.paneId}`)
        container.onmousedown = mousedownHandle
        
        // let rect = draw.rect(100, 100).radius(10)
        // draw.group().add(rect).draggable()
        // rect.draggable()
    }

    clearEventBubble (e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;
  
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    }
}

export default ActionPanel
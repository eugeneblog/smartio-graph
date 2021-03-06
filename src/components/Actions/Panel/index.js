/* eslint-disable react/style-prop-object */
/* global Snap */ 
/* global d3 */
import React from 'react'
import ChoiceBox from './ChoiceBox'
// import { func } from 'prop-types';
// import Graph from '../../Graph/index'

class ActionPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
            choiceStyle: {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            },
            selectSvg: this.props.paneData.selectSvg
        }
    }
    render() {
        return(
            <div 
            id={this.props.paneId}
            style={{overflow: 'scroll', position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', background: '#f8f9fa'}}
            className="action-container">
                <svg
                width={2000} 
                height={1800}
                style={{left: '0px', top: '0px', width: '100%', height: '100%', display: 'block', minWidth: '3000px', minHeight: '2800px', position: 'absolute', backgroundImage: 'none'}}
                onMouseDown = {this.drawMousedownHandle}>
                    <g className="svgPanel"  transform="translate(500,500)" width={ this.props.paneData.sWidth } height={ this.props.paneData.sHeight }>
                        <g className="grid">
                            <desc>网格背景</desc>
                            <rect width={ this.props.paneData.sWidth } height={ this.props.paneData.sHeight } fill="#ffffff"></rect>
                            {
                                /* 绘制网格线 */
                                this.createDrawLines(this.props.paneData.gridLength)
                            }
                        </g>
                        <g>
                            <desc>辅助线</desc>
                        </g>
                        <g className="baseLayer"
                        style={{cursor: "move"}}
                        onMouseEnter = {this.eventMouseEnterHandle}
                        onMouseDown = {this.eventMouseDownHandle}
                        onDoubleClick = {this.eventDbclickHandle}
                        >
                            <desc>基础视图</desc>
                            {
                                this.createEditElement(this.props.paneData.EditEle)
                            }
                        </g>
                        <g className="editCon"
                        onMouseDown = {this.editMouseDownHandle}
                        >
                            <desc>编辑控件</desc>
                            {
                                this.createEditCon(this.state.selectSvg)
                            }
                            {/* <g className="Auxiliaryline">
                                <desc>拖拽辅助线</desc>
                                <rect></rect>
                            </g> */}
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
        let s = Snap(`#${this.props.paneId} > svg .baseLayer`)
        // this.init(s)
        let bigCircle = s.rect(150,150,150,150)
        s.group(bigCircle)
        // console.log(bigCircle.node.getBBox())
        bigCircle.attr({
            fill: "#bada55"
        })
        var smallCircle = s.ellipse(70, 70, 70, 70);
        // Lets put this small circle and another one into a group:
        s.group(smallCircle, s.ellipse(200, 150, 70, 70));
        // 改变滚动条位置
        let sDiv = Snap(`#${this.props.paneId}`).node
        this.changeScrollTo(sDiv, 450, 480)
    }
    init(svg) {
        console.log(svg)
    }
    changeScrollTo(box, x, y) {
        // 重新计算坐标
        box.scrollTo(x, y)
    }
    createEditCon = (selectSvg) => {
        function editConTpl(key, x, y, w, h) {
            let _x = x - 9
            let _y = y - 9
            let editConTpl = (
                <React.Fragment key = {key}>
                    <g transform="translate(0.5,0.5)" style={{cursor: 'move', visibility: 'visible'}}>
                        <rect x={x} y={y} width={w} height={h} fill="none" stroke="#00a8ff" strokeDasharray="3 3" pointerEvents="none">
                        </rect>
                    </g>
                    <g style={{cursor: 'nw-resize', visibility: 'visible'}}>
                        <image x={_x} y={_y} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none">
                        </image>
                    </g>
                    <g style={{cursor: 'n-resize', visibility: 'visible'}}>
                        <image x={_x + w / 2} y={_y} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 'ne-resize', visibility: 'visible'}}>
                        <image x={_x + w} y={_y} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 'w-resize', visibility: 'visible'}}>
                        <image x={_x} y={_y + h / 2} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 'e-resize', visibility: 'visible'}}>
                        <image x={_x + w} y={_y + h / 2} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 'sw-resize', visibility: 'visible'}}>
                        <image x={_x} y={_y + h} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 's-resize', visibility: 'visible'}}>
                        <image x={_x + w / 2} y={_y + h} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g style={{cursor: 'se-resize', visibility: 'visible'}}>
                        <image x={_x + w} y={_y + h} width="18" height="18" xlinkHref="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiIHZlcnNpb249IjEuMSI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjUiIHN0cm9rZT0iI2ZmZiIgZmlsbD0iIzI5YjZmMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+" preserveAspectRatio="none"></image>
                    </g>
                    <g title="Click and drag to rotate, click to turn shape only by 90 degrees" style={{cursor: 'crosshair'}}>
                        <image x={_x + w / 2} y={y - 29} width="19" height="21" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAYAAACkCdXRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA6ZJREFUeNqM001IY1cUB/D/fYmm2sbR2lC1zYlgoRG6MpEyBlpxM9iFIGKFIm3s0lCKjOByhCLZCFqLBF1YFVJdSRbdFHRhBbULtRuFVBTzYRpJgo2mY5OX5N9Fo2TG+eiFA/dd3vvd8+65ByTxshARTdf1JySp6/oTEdFe9T5eg5lIcnBwkCSZyWS+exX40oyur68/KxaLf5Okw+H4X+A9JBaLfUySZ2dnnJqaosPhIAACeC34DJRKpb7IZrMcHx+nwWCgUopGo/EOKwf9fn/1CzERUevr6+9ls1mOjIwQAH0+H4PBIKPR6D2ofAQCgToRUeVYJUkuLy8TANfW1kiS8/PzCy84Mw4MDBAAZ2dnmc/nub+/X0MSEBF1cHDwMJVKsaGhgV6vl+l0mqOjo1+KyKfl1dze3l4NBoM/PZ+diFSLiIKIGBOJxA9bW1sEwNXVVSaTyQMRaRaRxrOzs+9J8ujoaE5EPhQRq67rcZ/PRwD0+/3Udf03EdEgIqZisZibnJykwWDg4eEhd3Z2xkXELCJvPpdBrYjUiEhL+Xo4HH4sIhUaAKNSqiIcDsNkMqG+vh6RSOQQQM7tdhsAQCkFAHC73UUATxcWFqypVApmsxnDw8OwWq2TADQNgAYAFosF+XweyWQSdru9BUBxcXFRB/4rEgDcPouIIx6P4+bmBi0tLSCpAzBqAIqnp6c/dnZ2IpfLYXNzE62traMADACKNputpr+/v8lms9UAKAAwiMjXe3t7KBQKqKurQy6Xi6K0i2l6evpROp1mbW0t29vbGY/Hb8/IVIqq2zlJXl1dsaOjg2azmefn5wwEAl+JSBVExCgi75PkzMwMlVJsbGxkIpFgPp8PX15ePopEIs3JZPITXdf/iEajbGpqolKKExMT1HWdHo/nIxGpgIgoEXnQ3d39kCTHxsYIgC6Xi3NzcwyHw8xkMozFYlxaWmJbWxuVUuzt7WUul6PX6/1cRN4WEe2uA0SkaWVl5XGpRVhdXU0A1DSNlZWVdz3qdDrZ09PDWCzG4+Pjn0XEWvp9KJKw2WwKwBsA3gHQHAqFfr24uMDGxgZ2d3cRiUQAAHa7HU6nE319fTg5Ofmlq6vrGwB/AngaCoWK6rbsNptNA1AJoA7Aux6Pp3NoaMhjsVg+QNmIRqO/u1yubwFEASRKUAEA7rASqABUAKgC8KAUb5XWCOAfAFcA/gJwDSB7C93DylCtdM8qABhLc5TumV6KQigUeubjfwcAHkQJ94ndWeYAAAAASUVORK5CYII=" preserveAspectRatio="none"></image>
                    </g>
                </React.Fragment>
            )
            return editConTpl
        }
        // console.log(selectSvg)
        let editResult = selectSvg.map((element, index) => {
            let attrs = element.getBBox()
            return editConTpl(index, attrs.x, attrs.y, attrs.width, attrs.height)
        })
        return editResult
    }
    // 元素拖动
    eventMouseDownHandle = (event) => {
        // 阻止事件继续传播
        
        this.clearEventBubble(event)
        let _this = this
        // 获取要移动的目标元素
        let target = event.target
        // 获取元素的group
        let tGroup = target.parentElement
        // 获取元素属性
        let attrs =  tGroup.getBoundingClientRect()
        // 原始属性
        let attr = tGroup.getBBox()
        // 坐标起始点
        let _startX = event.clientX
        let _startY = event.clientY
        // 创建拖拽辅助线，在目标移动的时候显示
        let auxCallback = _this.createAuxiliaryLine(attrs['x'], attrs['y'], attrs['width'], attrs['height'])
        // 将目标元素放入选中栈
        _this.setState({
            selectSvg: [tGroup]
        })
        // _this.props.paneData.selectSvg.push(tGroup)
        // setState执行完成之后有个callback，我们在这里执行之后的操作
        document.onmousemove = function(e) {
            _this.clearEventBubble(e)
            let aux = auxCallback.getInstance()
            // 移动公式： 当前目标元素坐标 + 移动距离
            aux.attr({
                x: attr['x'] + (e.clientX - _startX),
                y: attr['y'] + (e.clientY - _startY)
            })
        }
        document.onmouseup = function(e) {
            _this.clearEventBubble(e)
            // 销毁辅助线
            auxCallback.getInstance().remove()
            // 根据辅助线坐标更改目标元素坐标
            _this.changeElementCoordinates(tGroup, e.clientX - _startX, e.clientY - _startY)
            // 重绘辅助线
            _this.setState({
                selectSvg: [tGroup]
            })
            // _this.props.paneData.selectSvg.set(0, tGroup)
            // 销毁document上注册的事件
            document.onmousemove = null
            document.onmouseup = null
        }
    }
    
    // 元素双击事件
    eventDbclickHandle = (event) => {
        console.log('dbClick')
    }

    // 鼠标停留在元素上
    eventMouseEnterHandle = (e) => {
        // this.clearEventBubble(e)
        // console.log(e.target)
    }

    // 使用闭包的技巧创建拖拽辅助线， 有且唯一的对象
    createAuxiliaryLine = (x, y, w, h) => {
        let unique
        let _this = this
        function getInstance() {
            if (unique === undefined) {
                unique = Construct(x, y, w, h)
            }
            return unique
        }
        function Construct(x, y, w, h) {
            let s = Snap(`#${_this.props.paneId} .editCon`)
            let aux = s.rect(x, y, w, h)
            aux.attr({
                fillOpacity: '0',
                stroke: 'black',
                storkeWidth: '3',
                strokeDasharray: '5'
            })
            return aux
        }
        return {
            getInstance
        }
    }

    // 根据元素类型改变坐标，不使用translate改变坐标，translate不会改变元素坐标，而是改变整个坐标系，所以不方便计算
    changeElementCoordinates = (ele, moveX, moveY) => {
        let eleArr = ele.children
        for (let index = 0; index < eleArr.length; index++) {
            const element = eleArr[index]
            const attr = element.getBBox()
            elementChange(element, element.nodeName, attr)
        }
        // 每个基础元素坐标属性不一样，使用switch判断
        function elementChange(ele, type, attr) {
            switch (type) {
                case 'rect':
                    Snap(ele).attr({
                        x: attr['x'] + moveX,
                        y: attr['y'] + moveY
                    })
                    break;
                case 'circle':
                    // 圆的坐标比较特殊, 以圆心为基准点
                    Snap(ele).attr({
                        cx: ele.cx.baseVal.value + moveX,
                        cy: ele.cy.baseVal.value + moveY
                    })
                    break;
                case 'ellipse':
                    Snap(ele).attr({
                        cx: ele.cx.baseVal.value + moveX,
                        cy: ele.cy.baseVal.value + moveY
                    })
                    break;
                case 'line':

                    break;
                case 'polyline':

                    break;
                case 'polygon':

                    break;
                case 'path':

                    break;
                default:
                    break;
            }
        }
    }

    getchildAttr = function () {
        var unique
        function getInstance(ele) {
            let attrs = ele.getBBox()
            if (unique === undefined) {
                unique = new Construct(attrs)
            }
            return unique
        }
        function Construct(attrs) {
            this.attr = attrs
        }
        function clearunique() {
            if (unique) {
                unique = undefined
            }
        }
        return {
            getInstance: getInstance,
            clearunique: clearunique
        }
    }()
    // 缩放元素
    changeElementZoom = (ele, attrs, moveX, moveY, direction, geometric) => {
        let len = ele.length
        if (len === 1) {
            elementChange(ele[0].nodeName, ele[0])
        } else {
            for (let index = 0; index < len; index++) {
                const element = ele[index];
                // 这里使用了闭包，为了保存最开始的属性
                const callback = this.getchildAttr
                const childAttr = callback.getInstance(element)
                elementChange(element.nodeName, element, childAttr.attr, callback)
            }
        }
        function elementChange(type, element, childAttr, callback) {
            switch (type) {
                case 'rect':
                    if (direction === 'se-resize' || direction === 's-resize' || direction === 'e-resize') {
                        Snap(element).attr({
                            width: attrs['width'] + moveX,
                            height: attrs['height'] + moveY
                        })
                    } else if (direction === 'nw-resize' || direction === 'w-resize' || direction === 'n-resize') {
                        Snap(element).attr({
                            x: attrs['x'] + moveX,
                            y: attrs['y'] + moveY,
                            width: attrs['width'] - moveX,
                            height: attrs['height'] - moveY
                        })
                    } else if (direction === 'ne-resize') {
                        Snap(element).attr({
                            y: attrs['y'] + moveY,
                            width: attrs['width'] + moveX,
                            height: attrs['height'] - moveY
                        })
                    } else if (direction === 'sw-resize') {
                        Snap(element).attr({
                            x: attrs['x'] + moveX,
                            width: attrs['width'] - moveX,
                            height: attrs['height'] + moveY
                        })
                    }
                    break;
                case 'ellipse':
                    if (direction === 'se-resize' || direction === 's-resize' || direction === 'e-resize') {
                        // let r = element.r.animVal.value + moveX
                        Snap(element).attr({
                            rx: childAttr['width'] / 2 + moveX,
                            ry: childAttr['width'] / 2 + moveY
                        })
                    }
                    break;
                default:
                    break;
            }
        }
    }
    // 元素点击
    // eventClickHandle = (e) => {
    //     let target = e.target
    //     this.setState({
    //         selectSvg: [target]
    //     })
    // }
    // 编辑控件事件
    editMouseDownHandle = (event) => {
        this.clearEventBubble(event)
        let _this = this
        let target = event.target.parentElement
        let _startX = event.clientX
        let _startY = event.clientY
        // 计算当前编辑的元素是哪个
        let editCon = d3.select(`#${_this.props.paneId} .editCon`).selectAll('g').nodes()
        let index = editCon.indexOf(target)
        let direction = getComputedStyle(target,null)['cursor']
        let element = _this.state.selectSvg[Math.floor(index / 10)]
        let attrs = element.getBBox()
        document.onmousemove = function(e) {
            _this.clearEventBubble(e)
            let moveX = e.clientX - _startX
            let moveY = e.clientY - _startY
            // 根据元素类型缩放元素
            _this.changeElementZoom(element.children, attrs, moveX, moveY, direction)
            _this.setState({
                selectSvg: [element]
            })
        }
        document.onmouseup = function(e) {
            // 清除闭包
            _this.getchildAttr.clearunique()
            _this.clearEventBubble(e)
            // 销毁事件函数
            document.onmousemove = null
            document.onmouseup = null
        }
    }
    
    // 绘制网格
    createDrawLines(gridLength) {
        let _this = this
        // 网格的思路是 x 轴和 y 轴画直线， svg画板的宽度 除以 网格间距 等于 线段数量。其他同理，自己加减乘除
        let Wlen = Math.ceil(_this.props.paneData.sWidth / gridLength)
        let Hlen = Math.ceil(_this.props.paneData.sHeight / gridLength)
        let lines = []
        for (let i = 0; i < Wlen; i++) {
            lines.push(
                <line
                key = {`w${i}`}
                x1 = {i * gridLength}
                y1 = {0}
                x2 = {i * gridLength}
                y2 = {_this.props.paneData.sHeight}
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
                x2 = {_this.props.paneData.sWidth}
                y2 = {i * gridLength}
                stroke = "#e5e5e5"
                ></line>
            )
        }
        return lines
    }
    
    // 创建元素
    createEditElement(elements) {
        
    }

    drawMousedownHandle = (e) => {
        // e.persist()
        let _this = this
        let mouseOn = false
        let startX = 0
        let startY = 0
        // 单击页面空白处，删除所有选择框
        _this.setState({
            selectSvg: []
        })
        // _this.props.paneData.selectSvg = []
        // 阻止事件继续传播，防止事件冲突
        _this.clearEventBubble(e)
        if (e.buttons !== 1) return
        // if (e.buttons !== 1 || e.which !== 1) return;
        mouseOn = true;
         // _nHeight: navbar的高度, _sWidth: slide的宽度 ，鼠标点击的距离 - slide的宽度 = _x鼠标与画板左边缘的距离，同理_y 是鼠标距离画板顶部的距离
        let _nHeight = d3.select('#mainContainer').node().offsetTop
        let _sWidth = d3.select('#slidrContainer').node().offsetWidth
        // 获取滚动距离
        let _scrollTop = d3.select(`#${this.props.paneId}`).node().scrollTop
        let _scrollLeft = d3.select(`#${this.props.paneId}`).node().scrollLeft
        // 调整坐标原点为容器左上角 起始点： 当前点击的坐标 - 工具栏宽高 + 屏幕滚动距离
        startX = e.clientX - _sWidth + _scrollLeft;
        startY = e.clientY - _nHeight + _scrollTop;
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
            let _x = e.clientX - _sWidth + _scrollLeft;
            let _y = e.clientY - _nHeight + _scrollTop;
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
            // 获取选择框的区域， l: 选择框距离容器左边的距离 t：距离容器上方的距离 w: 自身的宽度 h： 自身的高度
            let selDiv = d3.select(`#${_this.props.paneId} .choicebox`).node()
            let eleField = d3.select(`#${_this.props.paneId} .baseLayer`).node().children
            let l = selDiv.offsetLeft
            let t = selDiv.offsetTop
            let w = selDiv.offsetWidth
            let h = selDiv.offsetHeight
            for (let i = 0; i < eleField.length; i++) {
                const element = eleField[i];
                if (element.getBBox) {
                    let attrs = element.getBBox()
                    attrs['x'] += 500
                    attrs['y'] += 500
                    let sl = attrs['width'] + attrs['x']
                    let st = attrs['height'] + attrs['y']
                    if (sl > l && st > t && attrs['x'] < l + w && attrs['y'] < t + h) {
                        _this.state.selectSvg.push(element)
                        // _this.props.paneData.selectSvg.push(element)
                    }
                }
            }
            // 获取框选的元素
            _this.setState({
                choiceBoxIsShow: false
            })
            mouseOn = false;
        }
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
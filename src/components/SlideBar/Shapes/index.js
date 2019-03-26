/* global d3 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Collapse } from 'antd';

const Panel = Collapse.Panel;
function callback(key) {
    console.log(key);
}

class Shapes extends Component {
    constructor() {
        super()
        this.state = {
            isSHowThumbnail: false,
            shapesList: [{
                id: '1',
                header: 'This is panel header 1',
                svgGroup: '',
                svgUse: ["icon-GLOBE"]
            }, {
                id: '2',
                header: 'This is panel header 2',
                svgGroup: '',
                svgUse: ["icon-GLOBE"]
            }]
        }
    }
    mouseShowThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: true
        })
    }
    mouseHideThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: false
        })
    }
    svgItemClickHandle = (e) => {
        // click handle
    }

    // 拖拽event
    svgItemMouseDownHandle = (e) => {
        // 获取被拖拽的图形
        let cSvg = e.currentTarget.firstElementChild
        let cSvgId = cSvg.firstElementChild.href.baseVal // xlink:href 的值
        console.log(cSvgId)
        // 创建div元素，设置样式, 加入dom树
        let oDiv = document.createElement("div")
        d3.select('#root').append(
            () => oDiv
        )
        document.onmousemove = function (event) {
            // 更改div位置，让其跟随光标移动
            d3.select(oDiv)
            .attr('class', "dom-subline")
            .style('left', `${event.clientX}px`)
            .style('top', `${event.clientY}px`)
        }
        document.onmouseup = function () {
            // 移除oDiv元素
            d3.select(oDiv).remove()
            document.onmousedown=null;
            document.onmousemove=null;
        }
        
    }
    // 显示缩略图
    thumbanil = (svg) => {
        // svg: 要显示的图
    }

    // 创建图形列表
    createShapeList = (group, key, sw, sh) => {
        let items = 
        <a
        onClick={this.svgItemClickHandle}
        onMouseEnter={this.mouseShowThumbnail}
        onMouseLeave={this.mouseHideThumbnail}
        onMouseDown={this.svgItemMouseDownHandle}
        className="svg-item"
        key={key}>
            <svg width={sw} height={sh}>
                <use xlinkHref={`#${key}`}/>
            </svg>
        </a>
        
        return items
    }

    render() {
        return (
            <Collapse className="collapse" defaultActiveKey={["0"]} onChange={callback}>
                {
                    this.state.shapesList.map(
                        (e,i) => 
                        <Panel
                            header={ e.header }
                            key={ String(i) }
                        >
                            {
                                e.svgUse.map(
                                    (svg) => this.createShapeList(null, svg, 38, 38)
                                )
                            }
                        </Panel>
                    )
                }
            </Collapse>
        )
    }
}

export default Shapes
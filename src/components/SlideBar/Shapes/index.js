/* global d3 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import { observable } from 'mobx'
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

@inject('appstate') @observer class Shapes extends Component {
    constructor() {
        super()
        this.state = {
            isSHowThumbnail: false
        }
        console.log(this)
    }

    componentDidMount() {
        // console.log(this.props.appshapes.shapesList)
    }
    
    componentWillReact() {
        // console.log(this)
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
            <Collapse className="collapse" defaultActiveKey={["0"]} onChange={changeCallback}>
                {
                    this.props.appshapes.shapesList.map(
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
    // 鼠标移入
    mouseShowThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: true
        })
        this.thumbanil()
    }
    // 鼠标移开
    mouseHideThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: false
        })
    }
    // 显示缩略图
    thumbanil = (svg) => {
        // svg: 要显示的图
    }

    // 点击item
    svgItemClickHandle = (e) => {
        // click handle
    }

    // 鼠标按下增加拖拽辅助线
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
}

// 点击callapse panel的回调
function changeCallback(key) {
    console.log(key);
}

export default Shapes
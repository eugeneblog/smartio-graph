/* global d3 */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import { observable } from 'mobx'
import { Collapse } from 'antd';
import Thumbanil from './Thumbanil'

const Panel = Collapse.Panel;

// 从store将shapes注入组件
@inject((allStores) => {
    return allStores.appstate.shapes || []
}) @observer class Shapes extends Component {
    constructor() {
        super()
        this.state = {
            thumbanilStyle: {
                top: 0,
                left: 0
            }
        }
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
            <div className="collapse-wraper">
                <Collapse className="collapse" defaultActiveKey={["0"]} onChange={changeCallback}>
                    {
                        this.props.shapesList.map(
                            (e,i) =>
                            <Panel
                                header={ e.header }
                                key={ String(i) }
                            >
                                {
                                    e.svgUse.map(
                                        (item) => this.createShapeList(null, item, 38, 38)
                                    )
                                }
                            </Panel>
                        )
                    }
                </Collapse>
                <Thumbanil 
                thumbanilStyle={this.state.thumbanilStyle} 
                thumbanilText={this.state.thumbanilText} 
                isShow={this.state.isSHowThumbnail}
                svg={this.state.thumbanilSvg}
                />
            </div>
        )
    }
    // 判断是否移入svg绘画区域
    isEnterSvg = (nX, nY, oDiv, svg) => {
        let isEnter = false
        let sX = this.props.slideWidth
        let sY = d3.select('#mainContainer').node().offsetTop
        d3.select(oDiv)
        .attr('class', "dom-subline")
        .style('left', `${nX}px`)
        .style('top', `${nY}px`)
        if (nX > sX && nY > sY) {
            // 移入绘画区域后进行相关操作
            isEnter = true
            d3.select(oDiv)
            .attr('class', "dom-subline dom-emphasizeLine")
        }
        document.onmouseup = function (e) {
            let oX = e.clientX
            let oY = e.clientY
            if (isEnter) {
                console.log(oX, oY)
            }
            // 移除oDiv元素
            d3.select(oDiv).remove()
            document.onmousedown=null;
            document.onmousemove=null;
        }
    }
    // 鼠标移入
    mouseShowThumbnail = (e) => {
        // 元素距离页面顶端的位置
        let options = {
            cSvg: e.currentTarget.firstElementChild,
            SVGoffsetX: this.props.slideWidth,
            SVGoffsetY: e.currentTarget.offsetTop
        }
        this.setState({
            isSHowThumbnail: true
        }, () => {
            this.thumbanil(options)
        })
    }
    // 鼠标移开
    mouseHideThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: false
        })
    }
    // 显示缩略图
    thumbanil = (options) => {
        // svg: 要显示的图, 缩略图坐标 =  ox: 元素左偏移量 和 oy: 元素顶部距离
        let _default = {
            cSvg: null,
            SVGoffsetX: null,
            SVGoffsetY: null
        }
        options = options || _default
        let isShow = this.state.isSHowThumbnail
        if (isShow) {
            // 更改缩略图样式
            this.setState({
                thumbanilStyle: {
                    left: `${options.SVGoffsetX}px`,
                    top: `${options.SVGoffsetY + 60}px`
                },
                thumbanilText: options.cSvg.tagName
            })
            console.log(options)
        }
    }
    // 点击item
    svgItemClickHandle = (e) => {
        // click handle
    }
    // 鼠标按下增加拖拽辅助线
    svgItemMouseDownHandle = (e) => {
        // 获取被拖拽的图形
        let cSvg = e.currentTarget.firstElementChild
        console.log(cSvg)
        // 创建div元素，设置样式, 加入dom树
        let oDiv = document.createElement("div")
        d3.select('#root').append(
            () => oDiv
        )
        document.onmousemove = (event) => {
            // 更改div位置，让其跟随光标移动
            this.isEnterSvg(event.clientX, event.clientY, oDiv, cSvg)
        }
    }
}
// 点击callapse panel的回调
function changeCallback(key) {
    console.log(key);
}

export default Shapes
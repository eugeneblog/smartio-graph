import React, { Component } from 'react';
import Actions from '../../components/Actions'
import Menus from '../../components/Menus'
import SlideBar from '../../components/SlideBar'
// import Editor from '../../components/Editor'
import Toolbar from '../../components/Toolbar'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd';
// import ReactSVG from 'react-svg'
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
let LayoutStyle = {
    height: "100%"
}
@inject((allStores) => {
    return allStores.appstate || []
}) @observer class HLayout extends Component {
    render() {
        return (
            <Layout style={ LayoutStyle }>
                <Menus/>
                <Toolbar/>
                <Layout>
                    <SlideBar/>
                    <Layout style={{ padding: '0 0px 0px' }}>
                        <Actions/>
                    </Layout>
                    {/* <Editor/> */}
                </Layout>
            </Layout>
        )
    }
    
    componentWillMount() {
        console.log('装载数据 , 初始化图形列表')
        // const shapes = [{
        //     id: '1',
        //     header: 'General',
        //     svgUse: ["icon-GLOBE"],
        //     svgGroup: [
        //         `<rect x="2" y="2" width="37" height="37" fill="#ffffff" stroke="#000000"></rect>`,
        //         `<rect x="2" y="11" width="37" height="19" fill="#ffffff" stroke="#000000"></rect>`,
        //         `<path d="M 2 8 L 39 8 L 39 29 Q 30 23 21 29 Q 11 36 2 29 L 2 12 Z" fill="#ffffff" stroke="#000000"></path>`,
        //         `<g><path d="M 7 10 C 7 0 35 0 35 10 L 35 32 C 35 42 7 42 7 32 Z" fill="#ffffff" stroke="#000000"></path><path d="M 7 10 C 7 17 35 17 35 10" fill="none" stroke="#000000"></path></g>`
        //     ]
        // }, {
        //     id: '2',
        //     header: 'General',
        //     svgUse: ["icon-GLOBE"],
        //     svgGroup: [
        //         `<rect x="2" y="2" width="37" height="37" fill="#ffffff" stroke="#000000"></rect>`,
        //         `<rect x="2" y="11" width="37" height="19" fill="#ffffff" stroke="#000000"></rect>`,
        //         `<path d="M 2 8 L 39 8 L 39 29 Q 30 23 21 29 Q 11 36 2 29 L 2 12 Z" fill="#ffffff" stroke="#000000"></path>`,
        //         `<g><path d="M 7 10 C 7 0 35 0 35 10 L 35 32 C 35 42 7 42 7 32 Z" fill="#ffffff" stroke="#000000"></path><path d="M 7 10 C 7 17 35 17 35 10" fill="none" stroke="#000000"></path></g>`
        //     ]
        // }]
        // this.props.shapes.setShape(shapes)
        // console.log(this.props)
    }
}

export default HLayout
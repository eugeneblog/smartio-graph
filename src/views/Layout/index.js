import React, { Component } from 'react';
import Actions from '../../components/Actions'
import Menus from '../../components/Menus'
import SlideBar from '../../components/SlideBar'
import Editor from '../../components/Editor'
import Toolbar from '../../components/Toolbar'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import { getShapsThumbnail } from "../../api/graph"
// import ReactSVG from 'react-svg'
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
@inject((allStores) => {
    return allStores.appstate || []
}) @observer class HLayout extends Component {
    render() {
        return (
            <Layout style={{ height: "100%" }}>
                <Menus/>
                <Toolbar/>
                <Layout>
                    <SlideBar/>
                    <Layout style={{ padding: '0 0px 0px' }}>
                        <Actions/>
                    </Layout>
                    {
                        this.props.mainstate.showView['editor'] ? <Editor/> : null
                    }
                </Layout>
            </Layout>
        )
    }
    
    componentWillMount() {
        // 视图加载后初始化图形列表
        getShapsThumbnail().then((res) => {
            this.props.shapes.setShape(res.data)
        })
    }
}

export default HLayout
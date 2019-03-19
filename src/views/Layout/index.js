import React, { Component } from 'react';
import Actions from '../../components/Actions'
import Menus from '../../components/Menus'
import SlideBar from '../../components/SlideBar'
import Editor from '../../components/Editor'
import Toolbar from '../../components/Toolbar'
import { Layout } from 'antd';
// import ReactSVG from 'react-svg'
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
let LayoutStyle = {
    height: "100%"
}
class HLayout extends Component {
    render() {
        return (
            <Layout style={ LayoutStyle }>
                <Menus/>
                <Toolbar/>
                <Layout>
                    <SlideBar/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Actions/>
                    </Layout>
                    <Editor/>
                </Layout>
            </Layout>
        )
    }
}

export default HLayout
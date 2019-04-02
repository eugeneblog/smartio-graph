import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Store from './store/index'
import './css/index.scss'

// 引入d3.js svg.js 用于操作svg图形
import * as d3 from 'd3'
// eslint-disable-next-line no-unused-vars
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import 'antd/dist/antd.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

window.d3 = d3
window.SVG = SVG
const appstate = new Store()

const rootNode = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <Provider appstate={appstate.getStoreAll}>
            <HashRouter>
                <Component/>
            </HashRouter>
        </Provider>,
        rootNode
    )
}
render(App)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
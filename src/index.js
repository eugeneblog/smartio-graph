import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss'

import * as d3 from 'd3'
import {fabric} from 'fabric'
import 'antd/dist/antd.css';

import { HashRouter } from 'react-router-dom'

import App from './App';
import * as serviceWorker from './serviceWorker';

window.d3 = d3
window.fabric = fabric

const rootNode = document.getElementById('root')
const render = Component => {
    ReactDOM.render(
        <HashRouter>
            <Component/>
        </HashRouter>,
        rootNode
    )
}
render(App)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

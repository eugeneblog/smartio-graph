import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import HLayout from '../views/Layout'
import Test from '../views/Test'

const routerList = [
    {
        path: '/',
        component: () => <Redirect to = "/draw"/>,
        exact: true
    }, {
        path: '/draw',
        component: HLayout
    }, {
        path: '/test',
        component: Test
    }
]

export default () => routerList.map((e, i) => {
    return <Route
    key = {i}
    {...e}
    />
})

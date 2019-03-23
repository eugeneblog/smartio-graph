import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import HLayout from '../views/Layout'
import Test from '../views/Test'
import UserLogin from '../views/User/Login'

const enterRoute = (v) => {
    // 进入路由 ...
    // 判断页面是否有用户Token，没有默认进入login
    console.log(v)
}

// 使用switch匹配route
const MainRoute = () => 
    <Switch>
        <Route exact path={'/'} render={() => <Redirect to="/draw" />} />
        <Route path={'/draw'} component={HLayout} onEnter={enterRoute.bind(this)} />
        <Route path={'/test'} component={Test} />
        <Route exact path={'/user/login'} component={UserLogin}/>
    </Switch>

export default MainRoute
import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import HLayout from '../views/Layout'
import Test from '../views/Test'
import WrappedNormalLoginForm from '../views/User/Login'

// 使用switch匹配route
const MainRoute = () => 
    <Switch>
        <Route exact path={'/'} render={() => <Redirect to="/draw" />} />
        <Route path={'/draw'} component={HLayout} />
        <Route path={'/test'} component={Test} />
        <Route exact path={'/user/login'} component={WrappedNormalLoginForm}/>
    </Switch>

export default MainRoute
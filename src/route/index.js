import React from 'react'
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import HLayout from '../views/Layout'
import Test from '../views/Test'
import WrappedNormalLoginForm from '../views/User/Login'

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} 
        render={
            (props) => (
                isLogin ? <Component/> : 
                <Redirect to={{pathname: 'user/login'}}/>
            )
        }
        />
    )
}

const InjectedPrivateRoute = withRouter(inject(({ appState }) => {
    return {
      isLogin: appState.user.isLogin,
    }
})(observer(PrivateRoute)))

class MainRoute extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to="/draw" />} />
                <Route path={'/draw'} component={HLayout} />
                <Route path={'/test'} component={Test} />
                <Route exact key="user-login" path={'/user/login'} component={WrappedNormalLoginForm}/>
            </Switch>
        )
    }
    componentWillReceiveProps() {
        console.log('aa')
    }
}

export default MainRoute
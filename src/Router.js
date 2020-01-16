import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Form1 from './components/Form1'
import Login from './components/Login'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

document.cookie = "loggedIn=true;max-age=60*1000";


const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}



const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            
            <ProtectedRoute exact path="/Form1" component={Form1} />
        </Switch>
     );
};

export default Router;
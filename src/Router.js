import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import Home from './components/Home';
import Form from './containers/Form'
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
        {/* <Route path="/login" component={Login} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/Form" component={Form} />
        {/* <Route path="/user/:id" component={user} /> */}
      </Switch>       
     );
};

export default Router;
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

let PrivateRoute = ({ component, ...rest }) => {
  let Component = component;
  let loggedInFlag = false;
  if(localStorage.getItem("session") && localStorage.getItem("token")) {
    loggedInFlag = JSON.parse(localStorage.getItem("session")).isLoggedIn;
  }
 return (
   <Route {...rest} render={props => (
     loggedInFlag ? (
       <Component {...props}/>
     ) : (
       <Redirect to={{
         pathname: '/login',
         state: { from: props.location }
       }}/>
     )
   )}/>
 )
}

export default PrivateRoute;

import React, { useContext } from 'react';
import { Route as Router, Redirect } from 'react-router-dom';

import { AuthContext } from '../Hooks/AuthContext';


function Route({ component : Component, isPrivate, ...rest }) {
  const { isAuthenticated }  = useContext(AuthContext);

  // if(expired) {
  //   return <Redirect to="/login" />;
  // }


  if(isPrivate && !isAuthenticated ) {
    return <Redirect to="/login" />;
  }

  if(!isPrivate && isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Router
      {...rest}
      render={(props) =>  <Component {...props} />
      }
    />
  );
}

export default Route;


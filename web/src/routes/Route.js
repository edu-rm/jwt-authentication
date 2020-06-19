import React, { useContext } from 'react';
import { Route as Router, Redirect } from 'react-router-dom';

import api from '../services/api';

import { AuthContext } from '../Hooks/AuthContext';


function Route({ component : Component, isPrivate, ...rest }) {
  const { state }  = useContext(AuthContext);
  const expired = Date.now()/1000 > Number(state.exp);

  console.log(expired);


  // if(expired) {
  //   return <Redirect to="/login" />;
  // }

  if((isPrivate && !state.isAuthenticated)) {
    return <Redirect to="/login" />;
  }

  if(!isPrivate && state.isAuthenticated) {
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


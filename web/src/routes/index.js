import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Login from '../pages/Login';



function routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} isPrivate/>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;

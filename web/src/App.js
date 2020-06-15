import React from 'react';
import Header from './components/Header';
import { Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route isPrivate path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Route from './Route';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;

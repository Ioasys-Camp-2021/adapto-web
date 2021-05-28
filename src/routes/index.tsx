import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from './Route';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { App } from '../pages/App';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/app" component={App} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;

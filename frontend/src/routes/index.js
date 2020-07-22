import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Home from '../pages/Home';
import Beer from '../pages/Beer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/" exact component={Home} isPrivate />
      <Route path="/beer/:id" component={Beer} isPrivate />
    </Switch>
  );
};

export default Routes;

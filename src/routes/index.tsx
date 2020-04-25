import * as React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const HomePage = loadable(() => import('../pages/HomePage'));
const SamplePage = loadable(() => import('../pages/SamplePage'));
const ErrorPage = loadable(() => import('../pages/ErrorPage'));

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/sample" component={SamplePage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Router;

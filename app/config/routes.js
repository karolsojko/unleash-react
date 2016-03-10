import React from 'react';
import UnleashApp from '../components/UnleashApp';
import Menu from '../components/Menu';
import Paths from '../components/Paths';
import Skills from '../components/Skills';
import Templates from '../components/Templates';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={UnleashApp}>
    <Route path="/paths" component={Paths} />
    <Route path="/skills" component={Skills} />
    <Route path="/templates" component={Templates} />
  </Route>
);

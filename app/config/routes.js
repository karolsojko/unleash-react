import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Path from '../components/Paths/Path';
import Templates from '../components/Paths/Templates';
import Router from 'react-router';
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;

export default (
  <Route path="/" component={Main}>
    <Route path="paths/:userId" component={Path} />
    <Route path="templates" component={Templates} />
    <IndexRoute component={Home}/>
  </Route>
);

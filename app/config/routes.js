import React from 'react';
import UnleashApp from '../components/UnleashApp';
import Menu from '../components/Menu';
import Paths from '../components/Paths';
import Path from '../components/Path';
import Skills from '../components/Skills';
import Skill from '../components/Skill';
import Templates from '../components/Templates';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={UnleashApp}>
    <Route path="/paths" component={Paths} />
    <Route path="/paths/:username" component={Path} />
    <Route path="/skills" component={Skills} />
    <Route path="/skill/:name" component={Skill} />
    <Route path="/templates" component={Templates} />
  </Route>
);

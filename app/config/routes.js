var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Path = require('../components/Paths/Path');
var Templates = require('../components/Paths/Templates');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="paths/:userId" component={Path} />
    <Route path="templates" component={Templates} />
    <IndexRoute component={Home}/>
  </Route>
);

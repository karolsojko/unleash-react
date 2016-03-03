var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var HashHistory = require('react-router').hashHistory;
var routes = require('./config/routes.js');

ReactDOM.render(
  <Router history={HashHistory}>{routes}</Router>,
  document.getElementById('app')
)

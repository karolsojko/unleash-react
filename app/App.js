import React from 'react';
import ReactDOM from 'react-dom';
import { Router, HashHistory } from 'react-router';
import routes from './config/routes.js';

ReactDOM.render(
  <Router history={HashHistory}>{routes}</Router>,
  document.getElementById('app')
)

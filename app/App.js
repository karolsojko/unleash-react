import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';

const dummyReducer1 = (state, action) => {
  return [];
};
const dummyReducer2 = (state, action) => {
  return [];
};

const unleashApp = combineReducers({
  dummyReducer1,
  dummyReducer2
});
const store = createStore(unleashApp);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);

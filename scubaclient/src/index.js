import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import About from './containers/about'
import Dashboard from './containers/Dashboard'
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from  './reducers'
import api from './middlewares/api'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(api)));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>


        <Router history={browserHistory}>
          <Route path="/" component={ App }>
            <Route path="/events" component={ Dashboard }/>
            <Route path="/about" component={About}/>
          </Route>
        </Router>


    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

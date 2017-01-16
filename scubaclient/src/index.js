import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App                     from './App';
import About                   from './containers/about'
import Dashboard               from './containers/Dashboard'
import Authenticated           from './containers/Authenticated'
import UserDashboard           from './containers/UserDashboard'
import UserBookForm            from './components/UserBookForm'
import LoginForm               from './components/login'
import { loadState, saveState} from './localStorage'
import './index.css';

import { Provider }             from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from  './reducers'
import api      from './middlewares/api'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, loadState(), composeEnhancers(applyMiddleware(api)));

store.subscribe(() => {
  saveState({
    events: store.getState().events,
    user: store.getState().user
  });
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>

        <Router history={browserHistory}>
          <Route path="/" component={ App }>
            <Route path="/events" component={ UserDashboard }/>
            <Route path="/bookform/:eventId" component={ UserBookForm }/>
            <Route path="/login" component={ LoginForm }/>
            <Route path="" component={ Authenticated }>
              <IndexRoute component={Dashboard}/>
              <Route path="/about" component={About}/>
            </Route>
          </Route>
        </Router>

    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

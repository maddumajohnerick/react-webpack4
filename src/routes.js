import React from 'react';
import { Provider } from 'react-redux';
import { Switch ,Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore';

import App from './components/App';
import Home from './containers/HomeContainer';
import ArtView from './containers/ArtViewContainer';
import NotFound from './components/NotFound';

const store = configureStore();
const history = createBrowserHistory()

export default (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/view/:artId" component={ArtView} />
          <Route exact path="/view/:artId" component={ArtView} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </App>
  </Provider>
);

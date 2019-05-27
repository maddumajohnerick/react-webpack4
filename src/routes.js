import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch ,Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();
const history = createBrowserHistory()

const Home = (lazy(() => import(/* webpackChunkName: 'home' */ './containers/HomeContainer')))

const ArtView = (lazy(() => import(/* webpackChunkName: 'art-view' */ './containers/ArtViewContainer')))

const NotFound = (lazy(() => import(/* webpackChunkName: 'not-found' */  './components/NotFound')))

export default (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Suspense fallback={<h2>Loading..</h2>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/view/:artId">
              <ArtView />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </App>
  </Provider>
);

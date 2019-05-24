import React from 'react';
import { Provider } from 'react-redux';
import { Switch ,Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();
const history = createBrowserHistory()

class DynamicImport extends React.Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Home = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'home' */ './containers/HomeContainer')}>
    {(Component) => Component === null
      ? <h2>Loading..</h2>
      : <Component {...props} />}
  </DynamicImport>
)

const ArtView = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'art-view' */ './containers/ArtViewContainer')}>
    {(Component) => Component === null
      ? <h2>Loading..</h2>
      : <Component {...props} />}
  </DynamicImport>
)

const NotFound = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'not-found' */  './components/NotFound')}>
    {(Component) => Component === null
      ? <h2>Loading..</h2>
      : <Component {...props} />}
  </DynamicImport>
)

export default (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/view/:artId" component={ArtView} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </App>
  </Provider>
);

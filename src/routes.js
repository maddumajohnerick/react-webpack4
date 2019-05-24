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
    const { compProps, loader } = this.props;
    const { component } = this.state;
    const Component = component

    if (Component) {
      return <Component {...compProps}/>;
    }
    return (loader ? loader : <h2>Loading..</h2>);
  }
}

const Home = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'home' */ './containers/HomeContainer')} compProps={props}/>
)

const ArtView = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'art-view' */ './containers/ArtViewContainer')} compProps={props}/>
)

const NotFound = (props) => (
  <DynamicImport load={() => import(/* webpackChunkName: 'not-found' */  './components/NotFound')} compProps={props}/>
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

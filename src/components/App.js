import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="site-header col-lg-8 offset-lg-2 text-center"><h1>Vector x Vexel</h1></div>
          <div className="col-lg-8 offset-lg-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(App);

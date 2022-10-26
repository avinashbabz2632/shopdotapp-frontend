/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import SignIn from './scence/SignIn';
import SignUp from './scence/SignUp';
import Container from './containers/authContainer';
import VerifyEmail from './scence/VerifyEmail';
import Home from './scence/Home';
import PlatformSelection from './scence/PlatformSelection';
import NotSupported from './scence/NotSupported';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Container(SignUp)} />
          <Route exact path="/signin" component={Container(SignIn)} />
          <Route exact path="/verifyemail" component={Container(VerifyEmail)} />
          <Route
            exact
            path="/platform"
            component={Container(PlatformSelection)}
          />
          <Route
            exact
            path="/notsupported"
            component={Container(NotSupported)}
          />
          <Route exact path="/home" component={Container(Home)} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);

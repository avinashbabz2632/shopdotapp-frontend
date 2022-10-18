/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import RootRouter from '../rootRoutes';

class App extends React.Component {
  render() {
    return <h1>fghj</h1>
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);

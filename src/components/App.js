/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { RouterProvider } from 'react-router-dom';
import { router } from '../RootRoutes'

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />

  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);

import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Container(CurrentComponent) {
  class Container extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <CurrentComponent {...this.props} />
          <ToastContainer />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      authReducer: state.authReducer,
      userReducer: state.userReducer,
      commonReducer: state.commonReducer,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch),
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

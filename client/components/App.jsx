import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Col } from 'react-bootstrap';

import store from '../store';

import '../styles/main.scss';

import '../styles/dark.scss';

import Routes from '../Routes';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
};

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <Laba4 />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);

AppRegistry.registerComponent(appName, () => App);

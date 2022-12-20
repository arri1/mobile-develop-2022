import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import store from './app/store';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

const Project1 = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Project1);

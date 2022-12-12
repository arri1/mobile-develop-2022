/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigator from './Navigator';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('RXdWde0m3YFUcvZMfvTcDo7ihWFlfGCL6akeFClZ','nrAgUEcjvXfZqA2WDZXctEL7Kaq0E0CUwMKZDim4');
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  return (
    <Provider store={store}>
     <NavigationContainer>
       <Navigator />
     </NavigationContainer>
     </Provider>
  );
};

export default App;
 
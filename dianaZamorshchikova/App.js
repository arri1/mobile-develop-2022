/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Tab from './Tab';

 const tabNavigator = createBottomTabNavigator();
 
 const App = () => {
  return (
    <Provider store={store}>
     <NavigationContainer>
       <Tab />
     </NavigationContainer>
     </Provider>
   );
 };

export default App;
 
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { firstTaskSolution } from './src/screens/firstLab/firstTaskSolution';
import { firstTaskText } from './src/screens/firstLab/firstTaskText';
import { secondTaskSolution } from './src/screens/secondLab/secondTaskSolution';
import { secondTaskText } from './src/screens/secondLab/secondTaskText';


const tabNavigator = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <tabNavigator.Navigator initialRouteName='first'>
        <tabNavigator.Screen name='first laboratory' component={firstTaskSolution} />
        <tabNavigator.Screen name='second laboratory' component={secondTaskSolution} />
      </tabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;

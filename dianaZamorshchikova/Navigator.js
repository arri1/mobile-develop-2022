/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from './src/screens/SplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import Tab from './Tab';

const stackNavigator = createStackNavigator();
const Navigator = () => {
    return (
        <stackNavigator.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName='App'>
            <stackNavigator.Screen name={'SplashScreen'} component={SplashScreen} />
            <stackNavigator.Screen name={'LoginScreen'} component={LoginScreen} />
            <stackNavigator.Screen name={'RegisterScreen'} component={RegisterScreen} />
            <stackNavigator.Screen name={'Tab'} component={Tab} />
        </stackNavigator.Navigator>
    );
}; 

 export default Navigator;

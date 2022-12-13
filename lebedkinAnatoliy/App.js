/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LabOne} from './screens/LabOne';
import {LabTwo} from './screens/LabTwo';
import {LabThree} from './screens/LabThree';
import {LabFour} from './screens/LabFour';
import Icon from 'react-native-vector-icons/FontAwesome';
import createStore from './store/createStore';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store = {createStore}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Lab1"
            component={LabOne}
            options={{
              tabBarIcon: () => {
                return (
                  <Icon name="th" size={20} color="#009" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Lab2"
            component={LabTwo}
            options={{
              tabBarIcon: () => {
                return (
                  <Icon name="list" size={20} color="#009" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Lab3"
            component={LabThree}
            options={{
              tabBarIcon: () => {
                return (
                  <Icon name="clock-o" size={20} color="#009" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Lab4"
            component={LabFour}
            options={{
              tabBarIcon: () => {
                return (
                  <Icon name="clock-o" size={20} color="#009" />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

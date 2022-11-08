/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LabOne} from './screens/LabOne';
import {LabTwo} from './screens/LabTwo';
import {LabThree} from './screens/LabThree';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigator';
import {Notes} from '../screens/Notes';
import {SvgProfile} from '../assets/svg/SvgProfile';
import {SvgScience} from '../assets/svg/SvgScience';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Главная"
        component={Navigator}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused, color, size}) => (
            <SvgScience color={focused ? 'violet' : 'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Личный кабинет"
        component={Notes}
        options={{
          tabBarLabel: 'Личный кабинет',
          tabBarIcon: ({focused, color, size}) => (
            <SvgProfile color={focused ? 'violet' : 'grey'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

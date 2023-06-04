import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigator';
import {Notes} from '../screens/Notes';
import {SvgProfile} from '../assets/svg/SvgProfile';
import {SvgScience} from '../assets/svg/SvgScience';
import {SvgProps} from 'react-native-svg';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarActiveTintColor: '#1a6eb2',
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: {
          fontSize: 13,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Главная"
        component={Navigator}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({focused, color, size}) => (
            <SvgScience color={focused ? '#1a6eb2' : '#000000'} />
          ),
        }}
      />
      <Tab.Screen
        name="Личный кабинет"
        component={Notes}
        options={{
          tabBarLabel: 'Личный кабинет',
          tabBarIcon: ({focused, color, size}) => (
            <SvgProfile color={focused ? '#1a6eb2' : '#000000'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

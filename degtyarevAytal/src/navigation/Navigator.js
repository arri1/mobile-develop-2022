import React from 'react';
import {Screen2} from '../screens/Screen2';
import {ProfileScreen} from '../screens/ProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen1} from '../screens/Screen1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Notes} from '../screens/Notes';
import {SvgProfile} from '../assets/svg/SvgProfile';
import {Laba1} from '../screens/Laba1';
import {Laba2} from '../screens/Laba2';
import {SvgScience} from '../assets/svg/SvgScience';
import {Laba0} from '../screens/Laba0';
import {Laba3} from '../screens/Laba3';


export const Navigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Главная"
          component={Home}
          options={{
            tabBarLabel: 'Главная',
            tabBarIcon: ({focused, color, size}) => (
              <SvgScience color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
        <Tab.Screen
          name="Личный кабинет"
          component={Notes}
          options={{
            tabBarLabel: 'Личный кабинет',
            tabBarIcon: ({focused, color, size}) => (
              <SvgProfile color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App">
      <Stack.Screen name={'Tab'} component={TabStack} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Laba0" component={Laba0} />
      <Stack.Screen name="Laba1" component={Laba1} />
      <Stack.Screen name="Laba2" component={Laba2} />
      <Stack.Screen name="Laba3" component={Laba3} />
      
    </Stack.Navigator>
  );
};

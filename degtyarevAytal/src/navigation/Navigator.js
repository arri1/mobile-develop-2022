import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen2} from '../screens/Screen2';
import {ProfileScreen} from '../screens/ProfileScreen';
import {Screen1} from '../screens/Screen1';
import {Home} from '../screens/Home';
import {Laba0} from '../screens/Laba0';
import {Laba1} from '../screens/Laba1';
import {Laba2} from '../screens/Laba2';
import {Laba3} from '../screens/Laba3';
import {Laba4} from '../screens/Laba4';
import {Laba5} from '../screens/Laba5';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Laba0" component={Laba0} />
      <Stack.Screen name="Laba1" component={Laba1} />
      <Stack.Screen name="Laba2" component={Laba2} />
      <Stack.Screen name="Laba3" component={Laba3} />
      <Stack.Screen name="Laba4" component={Laba4} />
      <Stack.Screen name="Laba5" component={Laba5} />
    </Stack.Navigator>
  );
};

export default Navigator;

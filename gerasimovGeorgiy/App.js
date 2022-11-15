import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from './screens/Lab1';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

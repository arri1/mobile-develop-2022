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
 import { firstTaskSolution } from './src/screens/firstTaskSolution';
 import { secondTaskSolution } from './src/screens/secondTaskSolution';

 const tabNavigator = createBottomTabNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <tabNavigator.Navigator initialRouteName='first'>
         <tabNavigator.Screen name='First laboratory' component={firstTaskSolution} />
         <tabNavigator.Screen name='Second laboratory' component={secondTaskSolution} />
       </tabNavigator.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 
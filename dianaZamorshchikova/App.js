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
 import { thirdTaskSolution } from './src/screens/thirdTaskSolution';
 import { firstTabIcon } from './src/drawable/firstTabIcon';
 import { secondTabIcon } from './src/drawable/secondTabIcon';
 import { thirdTabIcon } from './src/drawable/thirdTabIcon';

 const tabNavigator = createBottomTabNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <tabNavigator.Navigator initialRouteName='first'>
         <tabNavigator.Screen 
         name='First laboratory' 
         component={firstTaskSolution} 
         options={
          {
            tabBarLabel: 'ЛАБ 1',
            tabBarIcon: (tabInfo) => {
                <firstTabIcon
                  color={tabInfo.focused ? "green" : "gray"}
                />
            },
          }
         }
         />
         <tabNavigator.Screen 
         name='Second laboratory' 
         component={secondTaskSolution}
         options={
          {
            tabBarLabel: 'ЛАБ 2',
            tabBarIcon: (tabInfo) => {
                <secondTabIcon
                  color={tabInfo.focused ? "green" : "gray"}
                />
            },
          }
         }
         />
         <tabNavigator.Screen 
         name='Third laboratory' 
         component={thirdTaskSolution}
         options={
          {
            tabBarLabel: 'ЛАБ 3',
            tabBarIcon: (tabInfo) => {
                <thirdTabIcon
                  color={tabInfo.focused ? "green" : "gray"}
                />
            },
          }
         }/>
       </tabNavigator.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 
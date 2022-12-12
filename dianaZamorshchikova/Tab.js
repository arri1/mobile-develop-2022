/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { FirstTaskSolution } from './src/screens/FirstTaskSolution';
 import { SecondTaskSolution } from './src/screens/SecondTaskSolution';
 import { ThirdTaskSolution } from './src/screens/ThirdTaskSolution';
 import { FourthTaskSolution } from './src/screens/FourthTaskSolution';
 import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { useSelector } from 'react-redux';

 const tabNavigator = createBottomTabNavigator();
 
 const Tab = () => {
  const {background, tabColor} = useSelector(state => state.colorReducer); 
  return (
       <tabNavigator.Navigator>
         <tabNavigator.Screen 
         name='First laboratory' 
         component={FirstTaskSolution} 
         options={
          {
            tabBarLabel: 'ЛАБ 1',
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('./src/drawable/check_box.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? tabColor : "gray",
                    ...styles.TabBarImage,
                  }}
                />
              </View>
            ),
          }
         }
         />
         <tabNavigator.Screen 
         name='Second laboratory' 
         component={SecondTaskSolution}
         options={
          {
            tabBarLabel: 'ЛАБ 2',
            tabBarIcon: ({focused}) => (
            <View style={styles.ViewTabBarIcon}>
              <Image
                source={require('./src/drawable/check_box.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? tabColor : "gray",
                  ...styles.TabBarImage,
                }}
              />
            </View>
          ),
          }
         }
         />
         <tabNavigator.Screen 
         name='Third laboratory' 
         component={ThirdTaskSolution}
         options={
          {
            tabBarLabel: 'ЛАБ 3',
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('./src/drawable/check_box.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? tabColor : "gray",
                    ...styles.TabBarImage,
                  }}
                />
              </View>
            ),
          }
         }/>
         <tabNavigator.Screen 
         name='Fourth laboratory' 
         component={FourthTaskSolution}
         options={
          {
            tabBarLabel: 'ЛАБ 4',
            tabBarIcon: ({focused}) => (
            <View style={styles.ViewTabBarIcon}>
              <Image
                source={require('./src/drawable/check_box.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? tabColor : "gray",
                  ...styles.TabBarImage,
                }}
              />
            </View>
          ),
          }
         }
         />
       </tabNavigator.Navigator>
   );
 };

 const styles = StyleSheet.create({
  ViewTabBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  TabBarImage: {
    width: 25,
    height: 25,
  },
});
 
 export default Tab;

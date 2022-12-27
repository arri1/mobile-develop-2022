import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from '@react-navigation/stack';

import Lab1Screen from './screens/Lab1Screen';
import Lab2Screen from './screens/Lab2Screen';
import Lab3Screen from './screens/Lab3Screen';
import Login from './screens/Login';

const lab1Name = 'lab1';
const lab2Name = 'lab4';
const lab3Name = 'lab3';

const MainContainer = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const TabStack = () => {
    return(
        
                <Tab.Navigator
                    initialRouteName={lab1Name}
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === lab1Name, lab2Name, lab3Name) {
                                iconName = focused ? 'list' : 'list-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color}/>
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'grey',
                        labelStyle: { paddingBottom: 10, fontSize: 10},
                        style: {padding: 10, height: 70}
                    }}>
                    <Tab.Screen name={lab1Name} component={Lab1Screen}/>
                    <Tab.Screen name={lab3Name} component={Lab3Screen}/>
                    <Tab.Screen name={lab2Name} component={Lab2Screen}/>

                </Tab.Navigator>
        
    );
};
return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="App">
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="lab1Name"
        component={Lab1Screen}
        options={{title: 'lab1Name'}}
      />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{title: 'TabStack'}}
      />

      <Stack.Screen name="lab3Name" component={Lab3Screen} options={{title: 'Lab3'}} />
      <Stack.Screen name="lab2Name" component={Lab2Screen} options={{title: 'Lab2'}} />
    </Stack.Navigator>
  );
};

export default MainContainer;

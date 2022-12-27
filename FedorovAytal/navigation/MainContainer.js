import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Lab1Screen from './screens/Lab1Screen';
import Lab2Screen from './screens/Lab2Screen';
import Lab3Screen from './screens/Lab3Screen';

const lab1Name = 'lab1';
const lab2Name = 'lab2';
const lab3Name = 'lab3';

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return(
        <NavigationContainer>
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
                }}
                
                
                >
                
                <Tab.Screen name={lab1Name} component={Lab1Screen}/>
                <Tab.Screen name={lab2Name} component={Lab2Screen}/>
                <Tab.Screen name={lab3Name} component={Lab3Screen}/>



            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default MainContainer;
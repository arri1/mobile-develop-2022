import {NestedStackHomeNavigation} from './NestedStackHomeNavigation';
import {AboutScreen} from '../Screens/AboutScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Main') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'About app') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Main"
          component={NestedStackHomeNavigation}
          options={{headerShown: false}}
        />
        <Tab.Screen name="About app" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

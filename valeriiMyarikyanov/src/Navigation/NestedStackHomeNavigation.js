import {NestedHomeScreen} from '../Screens/NestedHomeScreen';
import {Lab1Screen} from '../Screens/Lab1Screen';
import {Lab2Screen} from '../Screens/Lab2Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const NestedStackHomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={NestedHomeScreen} />
      <Stack.Screen name='Laboratory 1' component={Lab1Screen} />
      <Stack.Screen name='Laboratory 2' component={Lab2Screen} />
    </Stack.Navigator>
  );
};

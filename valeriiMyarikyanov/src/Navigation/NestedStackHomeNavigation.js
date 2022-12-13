import {NestedHomeScreen} from '../Screens/NestedHomeScreen';
import {Lab1Screen} from '../Screens/Lab1Screen';
import {Lab2Screen} from '../Screens/Lab2Screen';
import {Lab3Screen} from '../Screens/Lab3Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const NestedStackHomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleStyle: {color: '#ff6347'}, headerTintColor: '#ff6347'}}>
      <Stack.Screen name="Home" component={NestedHomeScreen} />
      <Stack.Screen name="Laboratory 1" component={Lab1Screen} />
      <Stack.Screen name="Laboratory 2" component={Lab2Screen} />
      <Stack.Screen name="Laboratory 3" component={Lab3Screen} />
    </Stack.Navigator>
  );
};

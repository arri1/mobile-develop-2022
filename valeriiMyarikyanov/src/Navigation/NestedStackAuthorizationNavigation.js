import {LoginScreen} from '../Screens/LoginScreen';
import {RegistrationScreen} from '../Screens/RegistrationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const NestedStackAuthorizationNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#ff6347'},
        headerTintColor: '#ff6347',
      }}>
      <Stack.Screen name="Log in" component={LoginScreen} />
      <Stack.Screen name="Sign up" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

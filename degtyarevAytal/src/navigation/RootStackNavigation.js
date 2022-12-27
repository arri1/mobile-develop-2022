import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/Login';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
const RootStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name={'Tab'} component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default RootStackNavigation;

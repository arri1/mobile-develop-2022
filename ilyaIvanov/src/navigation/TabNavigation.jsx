import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LabOne} from '../screens/LabOne';
import {StackNavigation} from './StackNavigation';
import {LabTwoSvg} from '../assets/svg/LabTwoSvg';
import {LabOneSvg} from '../assets/svg/LabOneSvg';
import {LabThreeUseMemo} from '../screens/LabThreeUseMemo';
import LabFour from '../screens/LabFour';
import {StyleSheet, Image} from 'react-native';
import Login from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#6495ed'},
          tabBarActiveBackgroundColor: '#4169e1',
          headerStyle: {backgroundColor: '#6495ed'},
        }}>
        <Tab.Screen
          name="Лабораторная №1"
          component={LabOne}
          options={{
            tabBarLabel: 'LAB ONE',
            tabBarIcon: () => (
              <LabOneSvg height="66%" width="66%" viewBox="0 0 48 48" />
            ),
          }}
        />
        <Tab.Screen
          name="Лабораторная №2"
          component={StackNavigation}
          options={{
            tabBarLabel: 'LAB TWO',
            tabBarIcon: () => <LabTwoSvg />,
          }}
        />
        <Tab.Screen
          name="Лабораторная №3"
          component={LabThreeUseMemo}
          options={{
            tabBarLabel: 'LAB THREE',
            tabBarIcon: () => (
              <Image
                style={styles.tinyLogo}
                source={require('../assets/png/LabThreeIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Лабораторная №4"
          component={LabFour}
          options={{
            tabBarLabel: 'LAB FOUR',
            tabBarIcon: () => (
              <Image
                style={styles.tinyLogo}
                source={require('../assets/png/LabFourIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Авторизация"
          component={Login}
          options={{
            tabBarLabel: 'LOGIN',
            tabBarIcon: () => (
              <Image
                style={styles.tinyLogo}
                source={require('../assets/png/LoginIcon.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f8ff',
    color: '#f0f8ff',
  },
  tinyLogo: {
    width: 24,
    height: 24,
  },
});

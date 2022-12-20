import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LabOne} from '../screens/LabOne';
import {StackNavigation} from './StackNavigation';
import {LabTwoSvg} from '../assets/svg/LabTwoSvg';
import {LabOneSvg} from '../assets/svg/LabOneSvg';
import {LabThreeUseMemo} from '../screens/LabThreeUseMemo';
import LabFour from '../screens/LabFour';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#009999'},
          tabBarActiveBackgroundColor: '#1D7373',
          headerStyle: {backgroundColor: '#009999'},
        }}>
        <Tab.Screen
          name="Первая лабораторная работа"
          component={LabOne}
          options={{
            tabBarLabel: 'LAB ONE',
            tabBarIcon: () => (
              <LabOneSvg height="66%" width="66%" viewBox="0 0 48 48" />
            ),
          }}
        />
        <Tab.Screen
          name="Вторая лабораторная работа"
          component={StackNavigation}
          options={{
            tabBarLabel: 'LAB TWO',
            tabBarIcon: () => <LabTwoSvg />,
          }}
        />
        <Tab.Screen
          name="Третья лабораторная работа"
          component={LabThreeUseMemo}
          options={{
            tabBarLabel: 'LAB THREE',
            tabBarIcon: () => (
              <LabOneSvg height="66%" width="66%" viewBox="0 0 48 48" />
            ),
          }}
        />
        <Tab.Screen
          name="LabFour"
          component={LabFour}
          options={{
            title: 'Четвертая лабораторная работа',
            tabBarLabel: 'LAB FOUR',
            tabBarIcon: () => (
              <LabOneSvg height="66%" width="66%" viewBox="0 0 48 48" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5CCCCC',
    color: '#5CCCCC',
  },
});

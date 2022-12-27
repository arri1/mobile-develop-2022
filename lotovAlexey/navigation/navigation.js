import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Lab1 from '../screens/Lab1';
import Lab2 from '../screens/Lab2';
import Lab3 from '../screens/Lab3';
import Lab4 from '../screens/Lab4';
import Login from '../screens/Login';

const Navigate = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabStack = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,

          tabBarStyle: {
            position: 'relative',
            elevation: 0,
            backgroundColor: '#ffffff',
            height: 60,
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#FF6E31' : '#243763',
                    ...styles.TabBarImage,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FF6E31' : '#243763',
                    fontSize: 12,
                  }}>
                  HOME
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('../assets/icons/task1.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#FF6E31' : '#243763',
                    ...styles.TabBarImage,
                    height: 23,
                    marginBottom: 2,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FF6E31' : '#243763',
                    fontSize: 12,
                  }}>
                  Lab1
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('../assets/icons/task2.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#FF6E31' : '#243763',
                    ...styles.TabBarImage,
                    height: 23,
                    marginBottom: 2,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FF6E31' : '#243763',
                    fontSize: 12,
                  }}>
                  Lab2
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('../assets/icons/task3.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#FF6E31' : '#243763',
                    ...styles.TabBarImage,
                    height: 23,
                    marginBottom: 2,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FF6E31' : '#243763',
                    fontSize: 12,
                  }}>
                  Lab3
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab4"
          component={Lab4}
          options={{
            tabBarLabel: 'Lab4',
            tabBarIcon: ({focused}) => (
              <View style={styles.ViewTabBarIcon}>
                <Image
                  source={require('../assets/icons/task4.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? '#FF6E31' : '#243763',
                    ...styles.TabBarImage,
                    height: 23,
                    marginBottom: 2,
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#FF6E31' : '#243763',
                    fontSize: 12,
                  }}>
                  Lab4
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'relative',
          elevation: 0,
          backgroundColor: '#ffffff',
          height: 60,
          ...styles.shadow,
        },
      }}
      initialRouteName="App">
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'HomeScreen'}}
      />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{title: 'TabStack'}}
      />

      <Stack.Screen name="Lab1" component={Lab1} options={{title: 'Lab1'}} />
      <Stack.Screen name="Lab2" component={Lab2} options={{title: 'Lab2'}} />
      <Stack.Screen name="Lab3" component={Lab3} options={{title: 'Lab3'}} />
      <Stack.Screen name="Lab4" component={Lab4} options={{title: 'Lab4'}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
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

export default Navigate;

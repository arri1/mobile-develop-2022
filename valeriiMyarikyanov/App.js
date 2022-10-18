import * as React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Application made by Arancreat</Text>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Laboratory1" component={Laboratory1} />
    </Stack.Navigator>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Select laboratory:</Text>
      <Button
        title="Laboratory 1"
        onPress={() => navigation.navigate('Laboratory1')}
      />
    </View>
  );
};

var bottom=0;
var left=0;

const Laboratory1 = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text>{`Counter: ${count}, bottom = ${bottom}, left = ${left}`}</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
          switch (count % 4) {
            case 0:
              bottom = 0;
              left = 50;
              break;
        
            case 1:
              bottom = -50;
              left = 150;
              break;
        
            case 2:
              bottom =-650;
              left = 50;
              break;
        
            case 3:
              bottom = -350;
              left = 85;
              break;
          }
        }}
        style={[styles.dontClickButton, {bottom: bottom}, {left: left}]}
      >
      <Text>Don't Click</Text>  
      </TouchableOpacity>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
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
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen name="About app" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  dontClickButton: {
    backgroundColor: '#ff0000',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default App;

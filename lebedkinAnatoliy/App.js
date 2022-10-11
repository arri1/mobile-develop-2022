/* eslint-disable prettier/prettier */
import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';

const colors = [['red', 'orange', 'blue'],
[
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
],
[
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
],
[
  'yellow',
  'yellow',
  'grey',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
],
[
  'grey',
  'yellow',
  'grey',
  'grey',
  'grey',
  'grey',
  'grey',
  'grey',
  'grey',
  'grey',
],
[
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'grey',
  'yellow',
  'yellow',
  'yellow',
],
[
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
],
[
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
],
[
  'yellow',
  'grey',
  'yellow',
  'grey',
  'grey',
  'grey',
  'yellow',
  'grey',
  'yellow',
  'grey',
],
[
  'yellow',
  'grey',
  'grey',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'yellow',
],
[
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
],
[
  'yellow',
  'yellow',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
  'grey',
  'yellow',
  'yellow',
]];

function Lab1() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [digitIndex, setDigitIndex] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Counter: {count}</Text>
      <View style={styles.button}>
        <Button
          title={'add'}
          onPress={() => {
            setCount(count + 1);
            setDigitIndex((digitIndex + 1) % 10);
          }}
        />
      </View>
      <TouchableOpacity
        style={[styles.bar, {backgroundColor: colors[colorIndex]}]}
        onPress={() => {
          setColorIndex((colorIndex + 1) % colors.length);
        }}
      />
      <View style={styles.button}>
        <Button
          title={'color change'}
          onPress={() => {
            setColorIndex((colorIndex + 1) % colors.length);
          }}
        />
      </View>
      <View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors[1][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[2][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[1][digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors[3][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[4][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[5][digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors[6][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[7][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[1][digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors[8][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[4][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[9][digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors[10][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[11][digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors[1][digitIndex]}]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

class Lab2 extends Component {
  render() {
    return (
      <SafeAreaView>
        <WebView
            source={{ uri: 'https://en.wikipedia.org/wiki/React_Native' }}
          />
      </SafeAreaView>
    );
  }
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    marginTop: 10,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
  },
  block: {
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default App;

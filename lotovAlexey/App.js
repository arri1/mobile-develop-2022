import React, {useState, Fragment, useEffect, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
} from 'react-native';

const App = () => {
  const value = useRef(new Animated.Value(0)).current
  const carUp = () =>{
    Animated.timing(value, {toValue: 0, useNativeDriver: true, duration: 300}).start()
  }
  const carDown = () =>{
    Animated.timing(value, {toValue: 100, useNativeDriver: true, duration: 300}).start()
  }
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.grass}>
        <View style={styles.road}>
          
          <Animated.View style={styles.stripes}>
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
            <View style={styles.stripe} />
          </Animated.View>

          <Animated.Image
            resizeMode="center"
            source={require('./resources/car.png')}
            style={{...styles.carImage, ...styles.car, transform: [{translateY: value.interpolate({inputRange: [0,100], outputRange:[0,100]} )}]}}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button title="up" style={styles.button} onPress={carUp}/>
        <Button title="down" style={styles.button} onPress={carDown}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#87CEEB',
    flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
  },

  grass: {
    backgroundColor: '#4DED33',
    bottom: 0,
    position: 'absolute',
    height: '70%',
    width: '100%',
  },

  road: {
    backgroundColor: '#666560',
    height: 160,
    justifyContent: 'center',
    marginTop: '10%',
    width: '100%',
  },

  stripe: {
    backgroundColor: '#FFFFFF',
    width: '5%',
    height: 10,
  },

  stripes: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  carImage: {
    height: 80,
    position: 'absolute',
    left: -30,
  },

  car: {
    bottom: 100
    // top: -20,
  },

  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    width: 100,
    height: 100,
  },
});

export default App;

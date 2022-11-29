import React, {useState, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native';

const Lab1 = () => {
  const valueCar = useRef(new Animated.Value(0)).current;
  const [valueStripe] = React.useState(new Animated.Value(0));

  const animcar = valueStripe.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  carAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(valueStripe, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]),
  ).start();

  const carUp = () => {
    Animated.timing(valueCar, {
      toValue: 0,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };
  const carDown = () => {
    Animated.timing(valueCar, {
      toValue: 100,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.grass}>
        <View style={styles.road}>
          <Animated.View style={{...styles.stripes, left: animcar}}>
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
            <View style={styles.stripe} />
          </Animated.View>

          <Animated.Image
            resizeMode="center"
            source={require('../resources/car.png')}
            style={{
              ...styles.carImage,
              ...styles.car,
              transform: [
                {
                  translateY: valueCar.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <Button title="up" style={styles.button} onPress={carUp} />
        <Button title="down" style={styles.button} onPress={carDown} />
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
    height: 12,
  },

  stripes: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    left: 100,
    width: '125%',
  },

  carImage: {
    height: 80,
    position: 'absolute',
    left: -200,
  },

  car: {
    bottom: 100,
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

export default Lab1;

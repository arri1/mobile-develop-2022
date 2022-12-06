import React, {useRef} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  Pressable,
  Text,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

const Lab1 = () => {
  const valueCar = useRef(new Animated.Value(0)).current;
  const [valueStripe] = React.useState(new Animated.Value(0));

  const {skyColor} = useSelector(state => state.colorReducer);

  const animcar = valueStripe.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  Animated.loop(
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
    <SafeAreaView style={{...styles.background, backgroundColor: skyColor}}>
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
        <Pressable onPress={carUp} style={styles.button}>
          <Text style={styles.buttonText}> UP </Text>
        </Pressable>
        <Pressable onPress={carDown} style={styles.button}>
          <Text style={styles.buttonText}> Down </Text>
        </Pressable>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 32,
    backgroundColor: '#007EAF',
    borderRadius: 15,
    margin: 20,
  },

  buttonText: {
    fontSize: 12,
    fontFamily: 'Kulim',
    color: '#FFFFFF',
  },
});

export default Lab1;

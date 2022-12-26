import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

export const SplashScreen = () => {
  const {background, tabColor} = useSelector(state => state.colorReducer);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{...styles.mainContainer, backgroundColor: background}}>
      <View style={styles.countButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.text}>{"Sign in"}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={styles.text}>{"Sign up"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  countButton: {
    marginTop: 10,
  },
  bar: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  changeColorButton: {
    marginTop: 10,
    borderRadius: 10,
  },
  red: {
    color: 'red',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 10,
    backgroundColor: '#E2F4FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

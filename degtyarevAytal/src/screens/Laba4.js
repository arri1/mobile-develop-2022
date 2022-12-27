import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../redux/CounterSlice';

export const Laba4 = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={styles.textbox}>
        <Text style={styles.text}>Лабараторная 4 &shy;(Redux)</Text>
      </View>
      <View style={styles.buttons}>
        <View>
          <Text>Number of burger = {count}</Text>
          <Button
            title="Increase Burger"
            onPress={() => {
              dispatch(increment());
            }}
            color="#7653A6"
          />
        </View>
        <View style={{marginVertical: 50}}>
          <Button
            title="Decrease Burger"
            onPress={() => {
              dispatch(decrement());
            }}
            color="#7653A6"
          />
        </View>
      </View>
    </View>
  );
};

export default Laba4;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontSize: 24,
    paddingBottom: 20,
  },

  textbox: {
    paddingBottom: 170,
  },

  buttons: {
    marginBottom: 100,
  },
});

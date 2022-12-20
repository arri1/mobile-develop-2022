/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../app/counterSlice';

export const LabFour = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View styles={styles.container}>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

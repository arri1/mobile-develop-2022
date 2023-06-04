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
          <Text>Количество ДТП = {count}</Text>
          <Button
            title="Добавить"
            onPress={() => {
              dispatch(increment());
            }}
            color="#1a6eb2"
          />
        </View>
        <View style={{marginVertical: 50}}>
          <Button
            title="Удалить"
            onPress={() => {
              dispatch(decrement());
            }}
            color="#1a6eb2"
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
    paddingBottom: 180,
  },

  buttons: {
    marginBottom: 180,
  },
});

import React from 'react';
import {Text, View, Pressable} from 'react-native';
import Style from '../Style';
import { useSelector } from 'react-redux';

export const Lab4Screen = () => {
  const counterValue = useSelector(state => state.counter.value);

  return (
    <View style={Style.container}>
      <Text>Hello, you pressed THAT BUTTON {counterValue} times</Text>
    </View>
  );
};

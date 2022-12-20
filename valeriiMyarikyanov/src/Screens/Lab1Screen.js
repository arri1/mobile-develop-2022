import {Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react';
import Style from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from '../Redux/CounterSlice';

let bottom = -300;
let left = 150;

export const Lab1Screen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <View>
      <TouchableOpacity
        style={[Style.dontClickButton, {bottom: bottom}, {left: left}]}
        onPress={() => {
          dispatch(increment())
          switch (count % 4) {
            case 0:
              bottom = -650;
              left = 150;
              break;

            case 1:
              bottom = -50;
              left = 150;
              break;

            case 2:
              bottom = -650;
              left = 200;
              break;

            case 3:
              bottom = -350;
              left = 85;
              break;
          }
        }}>
        <Text>Don't click me</Text>
      </TouchableOpacity>
    </View>
  );
};

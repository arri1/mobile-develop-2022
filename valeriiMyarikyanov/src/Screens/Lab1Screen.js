import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as React from 'react';

var bottom = -300;
var left = 150;

export const Lab1Screen = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
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
        }}
        style={[styles.dontClickButton, {bottom: bottom}, {left: left}]}>
        <Text>Don't Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dontClickButton: {
    backgroundColor: '#ff0000',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

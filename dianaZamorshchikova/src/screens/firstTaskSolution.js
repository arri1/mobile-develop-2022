import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';

const colors = ['red', 'orange', 'blue', 'yellow', 'black'];

export const FirstTaskSolution = () => {
  const {background, tabColor} = useSelector(state => state.colorReducer);
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <SafeAreaView
      style={{...styles.mainContainer, backgroundColor: background}}>
      <Text style={styles.red}>{'Counter: ' + count.toString()}</Text>
      <View style={styles.countButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.text}>{'ADD 1'}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text style={styles.text}>{'SUBSTRACT 1'}</Text>
        </Pressable>
      </View>
      <TouchableOpacity
        style={[styles.bar, {backgroundColor: colors[colorIndex]}]}
        onLongPress={() => {
          setColorIndex(randomInteger(0, colors.length - 1));
        }}
      />
      <View style={styles.changeColorButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setColorIndex(randomInteger(0, colors.length - 1));
          }}>
          <Text style={styles.text}>{'CHANGE COLOR'}</Text>
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
    marginVertical: 13,
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
    color: '#6A6A6A',
    fontSize: 18,
  },
  button: {
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 16,
    elevation: 10,
    backgroundColor: '#E2F4FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'black',
  },
});

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

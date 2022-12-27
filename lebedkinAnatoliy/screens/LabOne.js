import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';

const colors = [
  ['red', 'orange', 'blue'],
  [
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'yellow',
    'grey',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
  ],
  [
    'grey',
    'yellow',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
  ],
  [
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'grey',
    'yellow',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
  ],
  [
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'grey',
    'yellow',
    'grey',
    'grey',
    'grey',
    'yellow',
    'grey',
    'yellow',
    'grey',
  ],
  [
    'yellow',
    'grey',
    'grey',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
  ],
  [
    'yellow',
    'yellow',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
    'grey',
    'yellow',
    'yellow',
  ],
];

export const LabOne = () => {
  const [count, setCount] = useState(0);
  const [digitIndex, setDigitIndex] = useState(0);
  const digitMap = [
    [1, 2, 1],
    [3, 4, 5],
    [6, 7, 1],
    [8, 4, 9],
    [10, 11, 1],
  ];
  const digitView = () => {
    return digitMap.map(element => {
      return (
        <View style={styles.row}>
          <View
            style={[
              styles.block,
              {backgroundColor: colors[element[0]][digitIndex]},
            ]}
          />
          <View
            style={[
              styles.block,
              {backgroundColor: colors[element[1]][digitIndex]},
            ]}
          />
          <View
            style={[
              styles.block,
              {backgroundColor: colors[element[2]][digitIndex]},
            ]}
          />
        </View>
      );
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.device}>
        <View style={[styles.buttonContainer, {right: 40}]}>
          <Button
            style={styles.button}
            title={'+'}
            onPress={() => {
              setCount(count + 1);
              setDigitIndex((digitIndex + 1) % 10);
            }}
          />
        </View>
        <View style={[styles.buttonContainer, {left: 40}]}>
          <Button
            style={styles.button}
            title={'-'}
            onPress={() => {
              setCount(count - 1);
              setDigitIndex((digitIndex - 1 + 10) % 10);
            }}
          />
        </View>
        <View style={styles.digitPanel}>{digitView()}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#7C7C7C',
  },
  buttonContainer: {
    position: 'absolute',
    width: 100,
    height: 30,
    bottom: 20,
  },
  button: {
    backgroundColor: '#8DE985',
    borderRadius: 40,
  },
  device: {
    backgroundColor: '#D9D9D9',
    position: 'absolute',
    width: 320,
    height: 534,
    left: 20,
    top: 40,
    borderRadius: 45,
  },
  digitPanel: {
    position: 'absolute',
    width: 270,
    height: 450,
    left: 25,
    top: 25,
    backgroundColor: '#404040',
  },
  row: {
    marginTop: 0,
    flexDirection: 'row',
  },
  block: {
    width: 70,
    height: 70,
    margin: 10,
  },
});

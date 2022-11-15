/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';

const colors = [['red', 'orange', 'blue'],
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
]];

export const LabOne = () => {
    const [count, setCount] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [digitIndex, setDigitIndex] = useState(0);
    const digitMap = [[1,2,1],[3,4,5],[6,7,1],[8,4,9],[10,11,1]];
    const digitView = () => {
      return digitMap.map((element) => {
        return (
          <View style={styles.row}>
            <View
              style={[styles.block, {backgroundColor: colors[element[0]][digitIndex]}]}
            />
            <View
              style={[styles.block, {backgroundColor: colors[element[1]][digitIndex]}]}
            />
            <View
              style={[styles.block, {backgroundColor: colors[element[2]][digitIndex]}]}
            />
          </View>
        );
      });
    };
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text>Counter: {count}</Text>
        <View style={styles.button}>
          <Button
            title={'add'}
            onPress={() => {
              setCount(count + 1);
              setDigitIndex((digitIndex + 1) % 10);
            }}
          />
        </View>
        <TouchableOpacity
          style={[styles.bar, {backgroundColor: colors[0][colorIndex]}]}
          onPress={() => {
            setColorIndex((colorIndex + 1) % colors[0].length);
          }}
        />
        <View style={styles.button}>
          <Button
            title={'color change'}
            onPress={() => {
              setColorIndex((colorIndex + 1) % colors[0].length);
            }}
          />
        </View>
        <View>{digitView()}</View>
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
    },
    button: {
      marginTop: 10,
    },
    row: {
      marginTop: 10,
      flexDirection: 'row',
    },
    block: {
      width: 50,
      height: 50,
      margin: 5,
    },
  });

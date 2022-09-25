import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
//import {} from 'react-native-gesture-handler';

const colors = ['red', 'orange', 'blue'];
const colors1 = [
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
];
const colors2 = [
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
];
const colors4 = [
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
];
const colors5 = [
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
];
const colors6 = [
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
];
const colors7 = [
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
];
const colors8 = [
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
];
const colors10 = [
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
];
const colors12 = [
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
];
const colors13 = [
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
];
const colors14 = [
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
];

const App = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [digitIndex, setDigitIndex] = useState(0);
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
        style={[styles.bar, {backgroundColor: colors[colorIndex]}]}
        onPress={() => {
          setColorIndex((colorIndex + 1) % colors.length);
        }}
      />
      <View style={styles.button}>
        <Button
          title={'color change'}
          onPress={() => {
            setColorIndex((colorIndex + 1) % colors.length);
          }}
        />
      </View>
      <View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors1[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors2[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors1[digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors4[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors5[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors6[digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors7[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors8[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors1[digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors10[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors5[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors12[digitIndex]}]}
          />
        </View>
        <View style={styles.row}>
          <View
            style={[styles.block, {backgroundColor: colors13[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors14[digitIndex]}]}
          />
          <View
            style={[styles.block, {backgroundColor: colors1[digitIndex]}]}
          />
        </View>
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

export default App;

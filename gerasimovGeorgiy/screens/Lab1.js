import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const colors = ['red', 'orange', 'blue'];
const Lab1 = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>{`Counter: ${count}`}</Text>
      <View style={styles.button}>
        <Button
          title={'add'}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
      <TouchableOpacity
        style={[styles.bar, {backgroundColor: colors[colorIndex]}]}
      />
      <View style={styles.button}>
        <Button
          title={'change color'}
          onPress={() => {
            setColorIndex((colorIndex + 1) % (colors.length - 1));
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    width: 100,
    height: 100,
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
});

export default Lab1;

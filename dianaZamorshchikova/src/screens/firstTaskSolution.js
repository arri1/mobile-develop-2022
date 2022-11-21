import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Pressable,
} from "react-native";

const colors = ['red', 'orange', 'blue', 'yellow', 'black'];

export const firstTaskSolution = () => {
    const [count, setCount] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    return (
      <SafeAreaView style={styles.mainContainer}>
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
          <Button
            title={'change color'}
            onPress={() => {
              setColorIndex(randomInteger(0, colors.length - 1));
            }}
          />
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
      marginTop: 10,
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
      color: 'red',
    },
    button: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
  
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
  
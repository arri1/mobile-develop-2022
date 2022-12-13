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
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const colors = ['red', 'orange', 'blue', 'yellow', 'black'];

export const welcomePage = () => {
    const navigation = useNavigation();
    const {background, tabColor} = useSelector(state => state.colorReducer); 
    const [colorIndex, setColorIndex] = useState(0);
    return (
      <SafeAreaView style={{...styles.mainContainer, backgroundColor: background}}>
        <View style={styles.countButton}>
          <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate('');
            }}>
            <Text style={styles.text}>{'Sign up'}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
                navigation.navigate('');
            }}>
            <Text style={styles.text}>{'Sign in'}</Text>
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
  
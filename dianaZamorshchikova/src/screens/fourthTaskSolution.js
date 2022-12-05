import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
} from "react-native";
import { useDispatch } from 'react-redux';
import { setBackground, setTabColor } from '../../redux/actions';

const tabColors = ['#55AAFF', '#03AC13', '#B90E0A', '#FBB117', '#030001'];
const backgroundColors = ['#FOF7F4', '#D5D6EA', '#F6F6EB', '#D7ECD9', '#F6ECF5', '#F3DDF2'];

export const fourthTaskSolution = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [tabColorIndex, setTabColorIndex] = useState(0);
  const dispatch = useDispatch();
  useDispatch;
  const setBackgroundColor = () => {
    dispatch(setBackground(backgroundColors[bgColorIndex]));  
  }
  const setTab = () => {
    dispatch(setTabColor(tabColors[tabColorIndex]));  
  }
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.black}>{'Change background color with redux: '}</Text>
        <TouchableOpacity
          style={[styles.bar, {backgroundColor: backgroundColors[bgColorIndex]}]}
          onPress={() => {
            setBgColorIndex(randomInteger(0, backgroundColors.length - 1));
          }}
        />
        <View style={styles.changeColorButton}>
          <Button
            title={'change background color'}
            onPress={setBackgroundColor}
          />
        </View>
        <Text style={styles.black}>{'Change tab color with redux: '}</Text>
        <TouchableOpacity
          style={[styles.bar, {backgroundColor: tabColors[tabColorIndex]}]}
          onPress={() => {
            setTabColorIndex(randomInteger(0, tabColors.length - 1));
          }}
        />
        <View style={styles.changeColorButton}>
          <Button
            title={'change tab color'}
            onPress={setTab}
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
      color: 'black',
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
  
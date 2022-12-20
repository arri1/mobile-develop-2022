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
import {useDispatch, useSelector} from 'react-redux';
import {setBackground, setTabColor} from '../../redux/actions';

const tabColors = ['#55AAFF', '#03AC13', '#B90E0A', '#FBB117', '#030001'];
const backgroundColors = [
  '#FOF7F4',
  '#D5D6EA',
  '#F6F6EB',
  '#D7ECD9',
  '#F6ECF5',
  '#F3DDF2',
];

export const FourthTaskSolution = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [tabColorIndex, setTabColorIndex] = useState(0);
  const dispatch = useDispatch();
  useDispatch;
  const setBackgroundColor = () => {
    dispatch(setBackground(backgroundColors[bgColorIndex]));
  };
  const setTab = () => {
    dispatch(setTabColor(tabColors[tabColorIndex]));
  };
  const {background, tabColor} = useSelector(state => state.colorReducer);
  return (
    <SafeAreaView
      style={{...styles.mainContainer, backgroundColor: background}}>
      <Text
        style={{
          marginTop: 15,
          fontSize: 16,
          color: '#6A6A6A',
          letterSpacing: 0.2,
        }}>
        {'Change background color with redux'}
      </Text>
      <TouchableOpacity
        style={[styles.bar, {backgroundColor: backgroundColors[bgColorIndex]}]}
        onPress={() => {
          setBgColorIndex(randomInteger(0, backgroundColors.length - 1));
        }}
      />
      <Pressable style={styles.button} onPress={setBackgroundColor}>
        <Text style={styles.text}>{'CHANGE COLOR'}</Text>
      </Pressable>
      <Text
        style={{
          marginTop: 15,
          fontSize: 16,
          color: '#6A6A6A',
          letterSpacing: 0.2,
        }}>
        {'Change tab color with redux'}
      </Text>
      <TouchableOpacity
        style={[styles.bar, {backgroundColor: tabColors[tabColorIndex]}]}
        onPress={() => {
          setTabColorIndex(randomInteger(0, tabColors.length - 1));
        }}
      />
      <Pressable style={styles.button} onPress={setTab}>
        <Text style={styles.text}>{'CHANGE COLOR'}</Text>
      </Pressable>
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
    borderWidth: 5,
    borderColor: 'black',
  },
  changeColorButton: {
    marginTop: 10,
    borderRadius: 10,
  },
  red: {
    color: 'black',
  },
  button: {
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E2F4FF',
    marginTop: 10,
    borderRadius: 10,
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

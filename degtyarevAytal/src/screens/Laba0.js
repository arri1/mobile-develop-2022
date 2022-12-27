import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

const colors = ['#7653A6', 'green', 'pink', 'blue', 'yellow'];

export const Laba0 = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <Container>
      <Text style={styles.text}>Лабараторная 0</Text>
      <SafeAreaView style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            setColorIndex((colorIndex + 1) % colors.length);
          }}
          style={[styles.bar, {backgroundColor: colors[colorIndex]}]}
        />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 0,
    marginBottom: 0,
    width: 105,
    height: 100,
    borderRadius: 100,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
  },
  countButton: {
    marginTop: 0,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontSize: 24,
    paddingTop: 20,
  },
});

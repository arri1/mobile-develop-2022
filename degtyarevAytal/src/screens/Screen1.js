import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Container} from '../components/Container';

export const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba0')}>
          <Text style={styles.text}>Лабараторная 0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba1')}>
          <Text style={styles.text}>Лабараторная 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba2')}>
          <Text style={styles.text}>Лабараторная 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba3')}>
          <Text style={styles.text}>Лабараторная 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba4')}>
          <Text style={styles.text}>Лабараторная 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.labs}
          onPress={() => navigation.navigate('Laba5')}>
          <Text style={styles.text}>Лабараторная 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  labs: {
    backgroundColor: '#7653A6',
    borderRadius: 29,
    width: 127,
    height: 47,
    textAlign: 'center',
    color: '#FFFFFF',
    textAlignVertical: 'center',
    borderColor: '#0000',
  },

  home: {
    flex: 1,
    flexDirection: 'row',
  },

  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    paddingTop: 10,
  },
});

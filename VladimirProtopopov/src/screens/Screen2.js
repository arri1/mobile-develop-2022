import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from '../components/Container';
import {StyleSheet} from 'react-native';

export const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.text}>Иванов Иван Иванович</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1a6eb2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 26,
  },
});

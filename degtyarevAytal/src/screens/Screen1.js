import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';


export const Screen1 = () => {
  const navigation = useNavigation();

  
  return (
    <Container showArrow={true}>
      <TouchableOpacity onPress = {() => navigation.navigate('Laba0')}>
        <Text>Лаба0</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('Laba1')}>
        <Text>Лаба1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('Laba2')}>
        <Text>Лаба2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('Laba3')}>
        <Text>Лаба3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('Laba4')}>
        <Text>Лаба4</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('Laba5')}>
        <Text>Лаба5</Text>
      </TouchableOpacity>
    </Container>
  );
};

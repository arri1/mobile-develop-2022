import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/Container';


export const Notes = () => {
    const navigation = useNavigation();


  return (
    <Container showArrow={false}>
      <TouchableOpacity onPress = {() => navigation.navigate('Screen2')}>
        <Text>Заметки</Text>
      </TouchableOpacity>
    </Container>
  );
};

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import axios from 'axios';


// const baseUrl = 'https://reqres.in';


export const Laba2 = () => {
  const navigation = useNavigation();

  return (
    <Container showArrow={true}>
      <TouchableOpacity>
        <Text>Тут скоро будет лаба 2</Text>
      </TouchableOpacity>
    </Container>
  );
};

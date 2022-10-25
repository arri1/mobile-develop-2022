import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';

export const Laba4 = () => {
  const navigation = useNavigation();

  return (
    <Container showArrow={true}>
      <TouchableOpacity>
        <Text>Тут скоро будет лаба 4</Text>
      </TouchableOpacity>
    </Container>
  );
};

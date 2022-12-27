import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';

export const Laba5 = () => {
  const navigation = useNavigation();

  return (
    <Container showArrow={true}>
      <TouchableOpacity>
        <Text style={{paddingTop: 20, fontSize: 30, color: '#000000'}}>
          Тут скоро будет лаба 5
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import {Container} from '../components/Container';

export const Laba5 = () => {
  const navigation = useNavigation();
  const schetchik = useSelector(state => state.counter.value)


  return (
    <Container showArrow={true}>
      <TouchableOpacity>
        <Text style={{paddingTop: 250,paddingLeft: 115, fontSize: 30, color: '#7653A6', fontWeight: 'bold',}}>
          Shetchick({schetchik})
        </Text>
      </TouchableOpacity>
    </Container>
  );
};


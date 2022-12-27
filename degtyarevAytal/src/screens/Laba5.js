import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
        <Text style={{paddingTop: 20, fontSize: 30, color: '#000000'}}>
          Shetchick({schetchik})
        </Text>
      </TouchableOpacity>
    </Container>
  );
};


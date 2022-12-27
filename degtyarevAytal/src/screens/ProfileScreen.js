import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Touchable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container} from '../components/Container';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const handNavigateToScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <TouchableOpacity>
        <Text>Лаба2</Text>
      </TouchableOpacity>
    </Container>
  );
};

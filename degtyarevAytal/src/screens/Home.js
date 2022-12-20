import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from '../components/Container';

export const Home = () => {
  const navigation = useNavigation();
  const image = '../assets/Home.png';

  return (
    <View style={styles.home} source={require(image)}>
      <View style={styles.container} showArrow={false}>
        <TouchableOpacity
          style={styles.sections}
          onPress={() => navigation.navigate('Screen1')}>
          <Text style={styles.sections}>Лабараторные</Text>
        </TouchableOpacity>
        <Text style={styles.sections}>Разное</Text>
        <Text style={styles.sections}>Разное</Text>
        <Text style={styles.sections}>Разное</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.sections}>Разное</Text>
        <Text style={styles.sections}>Разное</Text>
        <Text style={styles.sections}>Разное</Text>
        <Text style={styles.sections}>Разное</Text>
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

  sections: {
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
});

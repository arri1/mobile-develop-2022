import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export const Screen1 = () => {
  const navigation = useNavigation();
  const image = '../assets/Home.png';

  return (
    <View style={styles.ViewWithImageBackground}>
      <ImageBackground style={styles.ImageBackground} source={require(image)}>
        <View style={styles.main}>
          <Text style={styles.headtext}>Лабараторные</Text>
          <View style={styles.home}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba0')}>
                <Text style={styles.text}>Лабараторная 0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba1')}>
                <Text style={styles.text}>Лабараторная 1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba2')}>
                <Text style={styles.text}>Лабараторная 2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba3')}>
                <Text style={styles.text}>Лабараторная 3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba4')}>
                <Text style={styles.text}>Лабараторная 4</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.labs}
                onPress={() => navigation.navigate('Laba5')}>
                <Text style={styles.text}>Лабараторная 5</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.switch}>
            {'ᐸ'} <Text style={{color: '#1a6eb2'}}>1</Text> 2 3 4 {'ᐳ'}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: 40,
  },
  labs: {
    backgroundColor: '#1a6eb2',
    borderRadius: 29,
    width: 127,
    height: 47,
    textAlign: 'center',
    color: '#FFFFFF',
    textAlignVertical: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },

  home: {
    flex: 1,
    flexDirection: 'row',
  },

  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    paddingTop: 10,
  },

  main: {
    flex: 1,
    flex: 1,
    paddingTop: 200,
    textAlign: 'center',
    alignItems: 'center',
  },

  headtext: {
    fontSize: 24,
    fontFamily: 'Roboto Slab',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  switch: {
    marginBottom: 80,
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },

  ImageBackground: {
    flex: 1,
  },

  ViewWithImageBackground: {
    flex: 1,
  },
});

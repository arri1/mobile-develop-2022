import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  const image = '../assets/Home.png';

  return (
    <View style={styles.ViewWithImageBackground}>
      <ImageBackground style={styles.ImageBackground} source={require(image)}>
        <View style={styles.main}>
          <Text style={styles.text}>Главная</Text>
          <View style={styles.home}>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
                <Text style={styles.sections}>Лабараторные</Text>
              </TouchableOpacity>
              <Text style={styles.sections}>Приложения</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.sections}>Архив</Text>
              <Text style={styles.sections}>Медиа</Text>
            </View>
          </View>
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
  },

  sections: {
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
    paddingBottom: 200,
  },

  main: {
    flex: 1,
    paddingTop: 200,
    textAlign: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontFamily: 'Roboto Slab',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  ImageBackground: {
    flex: 1,
  },

  ViewWithImageBackground: {
    flex: 1,
  },
});

export default Home;

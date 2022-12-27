import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Notes = () => {
  const navigation = useNavigation();
  const image = '../assets/User.png';

  return (
    <View style={styles.ViewWithImageBackground}>
      <ImageBackground style={styles.ImageBackground} source={require(image)}>
        <View style={styles.main}>
          <Text style={styles.text}>Профиль</Text>
          <View style={styles.home}>
            <View style={styles.container} showArrow={false}>
              <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                <Text style={styles.sections}>Заметки</Text>
              </TouchableOpacity>
              <Text style={styles.sections}>Разное</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.sections}>Разное</Text>
              <Text style={styles.sections}>Разное</Text>
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
    backgroundColor: '#7653A6',
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
    paddingBottom: 70,
  },

  main: {
    flex: 1,
    paddingTop: 100,
    textAlign: 'center',
    alignItems: 'center',

    paddingBottom: 120,
  },

  text: {
    fontSize: 24,
    fontFamily: 'Roboto Slab',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  ImageBackground: {
    flex: 1,
  },

  ViewWithImageBackground: {
    flex: 1,
  },
});

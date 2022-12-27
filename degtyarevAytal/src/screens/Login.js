import {StatusBar} from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const image = '../assets/Login.png';

  return (
    <View style={styles.ViewWithImageBackground}>
      <ImageBackground style={styles.imageBackground} source={require(image)}>
        <Image style={styles.image} source={require('../assets/Reactp.png')} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Логин"
            placeholderTextColor="#FFFFFF"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Пароль"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>
            Хочешь узнать свой пароль? 500 рублей
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Tab')}>
          <Text style={styles.loginText}>Войти</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#7653A6',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: '#7653A6',
  },

  loginBtn: {
    color: '#FFFFFF',
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#7653A6',
  },

  loginText: {
    color: '#FFFFFF',
  },

  ViewWithImageBackground: {
    flex: 1,
    backgroundColor: '#f2f3f2',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;

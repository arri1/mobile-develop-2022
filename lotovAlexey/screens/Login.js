import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const loginToApp = () => {
    if (password.length <= 7) {
      alert('Password length should be greater that 8');
    } else if (login.length <= 2) {
      alert('Login length should be greater that 3');
    } else {
      navigation.navigate('TabStack');
    }
  };
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#243763',
        justifyContent: 'center',
      }}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          placeholderTextColor="#FFFFFF"
          onChangeText={login => setlogin(login)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <Pressable>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </Pressable>
      <Pressable style={{...styles.button, width: '70%'}} onPress={loginToApp}>
        <Text style={styles.buttonText}> Login </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  forgot_button: {
    height: 30,
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Kulim',
    color: '#FFEBB7',
  },
  inputView: {
    backgroundColor: '#FF6E31',
    borderRadius: 14,
    width: '70%',
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
  },

  TextInput: {
    marginLeft: 20,
    fontFamily: 'Kulim',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    width: 351,
    height: 41,
    borderRadius: 14,
    backgroundColor: '#FF6E31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Kulim',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Kulim',
  },
});
export default Login;

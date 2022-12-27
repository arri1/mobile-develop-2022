import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const loginToApp = () => {
    if (password.length <= 7) {
      alert('Пароль должен быть больше 7 символов');
    } else if (login.length <= 2) {
      alert('Логин должен быть больше 2 символов');
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
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          onChangeText={login => setlogin(login)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <Pressable style={{...styles.button}} onPress={loginToApp}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'orange',
    borderRadius: 14,
    width: '60%',
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
  },

  TextInput: {
    marginLeft: 20,
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  button: {
    width: 351,
    height: 41,
    borderRadius: 14,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',  
    width: '60%',
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    
  },
});
export default Login;
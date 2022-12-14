import React from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import Style from '../Style';

export const LoginScreen = ({navigation}) => {
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onPressLogin = () => {
    if (name != '') {
      if (password != '') {
        console.log(name, ' ', password);
        return navigation.navigate('Main');
      }
    }
    return alert('Please, enter your name and password correctly!');
  };

  return (
    <View style={Style.container}>
      <Text>Hello! Please enter your nickname and password</Text>
      <TextInput
        placeholder="Your name"
        style={Style.textInput}
        onChangeText={onChangeName}
        value={name}
      />
      <TextInput
        placeholder="Your password"
        style={Style.textInput}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
      <Pressable
        style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
        onPress={onPressLogin}>
        <Text>Log in</Text>
      </Pressable>
      <Text>
        Don't have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Sign up')}
          style={Style.hyperLinkText}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

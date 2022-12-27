import React from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import Style from '../Style';

export const RegistrationScreen = ({navigation}) => {
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  const onPressSignup = () => {
    // Too lazy to implement correct validation
    if (name != '') {
      if (password != '') {
        console.log(name, ' ', password);
        return navigation.goBack();
      }
    }
    return alert('Please, enter your name and password correctly!');
  };

  return (
    <View style={Style.container}>
      <TextInput
        placeholder="Your name"
        style={Style.textInput}
        onChangeText={onChangeName}
        value={name}
      />
      <TextInput
        placeholder="Your email"
        style={Style.textInput}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="Your password"
        style={Style.textInput}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm your password"
        style={Style.textInput}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Pressable
        style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
        onPress={onPressSignup}>
        <Text>Sign up</Text>
      </Pressable>
    </View>
  );
};

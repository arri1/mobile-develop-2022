import React from 'react';
import {Text, View, Pressable, TextInput} from 'react-native';
import bcrypt from 'react-native-bcrypt';
import Style from '../Style';

// Setting salt
let salt = bcrypt.genSaltSync(10);

//Custom hashing function
const hashSyncFunc = text => {
  if (text == '') {
    return 'Press button to start';
  }
  console.log(text);
  console.log(salt);
  hashedText = bcrypt.hashSync(text, salt);
  console.log(hashedText);
  return hashedText;
};

export const Lab3Screen = () => {
  const [text, onChangeText] = React.useState('');
  const [textToHash, prepareTextToHash] = React.useState('');
  const cachedHash = React.useMemo(
    () => hashSyncFunc(textToHash),
    [textToHash],
  );
  return (
    <View style={Style.container}>
      <TextInput
        placeholder="Type here"
        style={Style.textInput}
        onChangeText={onChangeText}
        value={text}
      />
      <Pressable
        style={({pressed}) => [pressed ? Style.buttonActive : Style.button]}
        onPress={() => prepareTextToHash(text)}>
        <Text>Generate bcrypt hash</Text>
      </Pressable>
      <Text>{cachedHash}</Text>
    </View>
  );
};

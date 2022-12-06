import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import isaac from 'isaac';
import bcrypt from 'react-native-bcrypt';

// Setting RNG
bcrypt.setRandomFallback(len => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(isaac.random() * 256));
});

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
  const [text, onChangeText] = React.useState('Type text here');
  const [textToHash, prepareTextToHash] = React.useState('');
  const cachedHash = React.useMemo(
    () => hashSyncFunc(textToHash),
    [textToHash],
  );
  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text} />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => prepareTextToHash(text)}>
        <Text>Generate bcrypt hash</Text>
      </TouchableOpacity>
      <Text>{cachedHash}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  buttonStyle: {
    alignItems: 'center',

    backgroundColor: '#DDDDDD',

    padding: 10,

    width: '100%',

    marginTop: 16,
  },
});

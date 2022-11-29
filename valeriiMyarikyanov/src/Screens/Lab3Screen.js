import axios from 'axios';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {sha256} from 'react-native-sha256';

export const Lab3Screen = () => {
  const [text, onChangeText] = React.useState('Type text here');
  const [hash, setHash] = React.useState('');
  return (
    <View>
      <TextInput onChangeText={onChangeText} value={text} />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          sha256(text).then(hash => {
            setHash(hash);
          });
        }}>
        <Text>Generate sha256 hash</Text>
      </TouchableOpacity>
      <Text>{hash}</Text>
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

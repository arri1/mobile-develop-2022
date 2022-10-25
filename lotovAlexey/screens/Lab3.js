import React, {useState, useMemo} from 'react';
import {
    View,
    Text,
    Button,
    TextInput
  } from 'react-native';
import { event, onChange } from 'react-native-reanimated';

const Lab3 = () => {
  const asd = useMemo(() => Myfunction(number), [number]);
  const [number, setNumber] = useState(1);
  return (
    <View>
      <Text>Use Memo.</Text>
      <TextInput
        placeholder="Write number"
        keyboardType='numeric'
        onChangeText={(value) => setNumber(value)}
      />
      <Text>Answer: {number}</Text>
    </View>
  );
};

function Myfunction(n) {
  for (let i=0;i<10000;i++){

  }
  return n;
}

export default Lab3;
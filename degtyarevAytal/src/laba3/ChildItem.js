import React, {useRef, memo} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ChildItem = props => {
  const renderCount = useRef(0);
  console.log('Rendering Child Item');
  return (
    <View>
      <Button title="Child Button" onPress={props.onClick} />
      <Text>Child rendered {renderCount.current++} times</Text>
      <Text>{props.title}</Text>
    </View>
  );
};
export default memo(ChildItem);

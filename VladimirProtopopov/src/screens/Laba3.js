import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ChildItem from '../laba3/ChildItem';
// import ChildItem from '../laba3/ChildItemWithoutMemo';

export const Laba3 = () => {
  const [clicks, setClicks] = useState(0);
  const [childClicks, setChildClicks] = useState(0);
  const [number, setNumbers] = useState({a: 16, b: 4});
  console.log('Parent re-rendered');

  const onParentStateHandler = () => {
    setClicks(clicks + 1);
  };

  const onChildClickHandler = useCallback(() => {
    setChildClicks(childClicks + 1);
  }, [childClicks]);

  const calculateSum = () => {
    console.log('Sum calculate function called');
    return number.a + number.b;
  };

  const memoizedFunction = useMemo(() => calculateSum(), [number]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textbox}>
        <Text style={styles.text}>Лабараторная 3 (UseMemo)</Text>
      </View>
      <Button
        title="Parent Button"
        onPress={onParentStateHandler}
        color="#1a6eb2"
      />
      <Text>I am from Parent. Click {clicks} times</Text>
      <Text>Click from child {childClicks} times</Text>
      <ChildItem title="I am Child A" />
      <Text>{memoizedFunction} is the sum</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    height: 50,
    width: '90%',
  },

  text: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontSize: 24,
  },

  textbox: {
    paddingBottom: 180,
  },
});

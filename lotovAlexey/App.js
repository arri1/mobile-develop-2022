import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Touch,
  Button,
} from 'react-native';

const colors = ['red', 'orange', 'blue'];
const App = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>{`Counter: ${count}`}</Text>
      <View>
        <Button
          title={`add`}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
      <View style={[styles.bar, {backgroundColor: colors[colorIndex]}]} />
      <Button
        title={'changeColor'}
        onPress={() => {
          setColorIndex((colorIndex + 1) % (colors.length - 1));
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    width: '100',
    height: '100',
    borderRadius: '10',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  countButton: {
    color: 'red',
  },
});

export default App;

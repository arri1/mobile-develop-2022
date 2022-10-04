import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const colors = ['grey', 'green', 'pink'];

const App = () => {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text>{`Counter: ${count}`}</Text>
        <Button
          title={`add`}
          onPress={() => {
            setCount(count + 1);
          }}
          style={styles.countButton}
        />
      </View>
      <View style={[styles.bar, {backgroundColor: colors[colorIndex]}]} />
      <Button
        title={`Поменять цвет`}
        onPress={() => {
          setColorIndex(((colorIndex + 1) % colors.length));
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  countButton: {
    marginTop: 0,
  },
});

export default App;
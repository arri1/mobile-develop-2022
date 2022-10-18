import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../components/Container';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

const colors = ['grey', 'green', 'pink', 'blue', 'yellow'];

export const Laba0 = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <Container showArrow={true}>
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.bar, {backgroundColor: colors[colorIndex]}]} />
      <Button
        title={`Поменять цвет`}
        onPress={() => {
          setColorIndex(((colorIndex + 1) % colors.length));
        }}
      />
    </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '93%',
  },
  countButton: {
    marginTop: 0,
  },
});

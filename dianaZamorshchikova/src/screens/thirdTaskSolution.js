import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';

export const ThirdTaskSolution = () => {
  const {background, tabColor} = useSelector(state => state.colorReducer);
  console.log('Screen is rendered');
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{...styles.container, backgroundColor: background}}>
        <Text style={{fontSize: 18, marginBottom: 45}}>
          Please, enter your number below
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here!"
          onChangeText={text => {
            setNumber(Number(text));
          }}
          defaultValue={number}
          keyboardType={'numeric'}
        />
        <Text style={{fontSize: 16, marginTop: 33, fontWeight: 'bold'}}>
          factorial of {number} is
        </Text>
        <Text style={{fontSize: 16, marginBottom: 44, fontWeight: 'bold'}}>{factorial}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            setInc(inc + 1);
            console.log('Re-rendered!');
          }}>
          <Text style={styles.text}>Re-render pressed {inc} times</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const factorialOf = n => {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textInput: {
    width: 250,
    backgroundColor: '#E2F4FF',
    padding: 16,
    textAlign: 'center',
    fontSize: 21,
  },
  button: {
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#E2F4FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: 'black',
  },
});

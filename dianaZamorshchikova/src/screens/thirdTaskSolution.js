import React, {useState, useMemo} from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    TextInput,
    View,
    Text,
    Pressable
} from 'react-native';

export const thirdTaskSolution = () => {
  console.log("Screen is rendered");
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
    <Text style={{padding: 10, fontSize: 24}}>Please, enter your number below</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here!"
        onChangeText={ text => {
          setNumber(Number(text));
        }}
        defaultValue={number}
        keyboardType={'numeric'}
      />
      <Text style={{padding: 10, fontSize: 24}}>Factorial of {number} is</Text>
      <Text style={{padding: 10, fontSize: 24}}>
        {factorial}
      </Text>
      <Pressable style={styles.button}
        onPress={() => {
          setInc(i => i + 1);
          console.log("Re-rendered!");
        }}>
        <Text style={styles.text}>{'Re-render'}</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}; 

function factorialOf(n) {
    console.log("factorialOf(n) called!");
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}  

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  textInput: {
    width: 250,
    backgroundColor: '#dde8c9',
    padding: 16,
    textAlign:'center',
    fontSize: 24,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
  
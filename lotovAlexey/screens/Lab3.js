import React, {useState, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Lab3 = () => {
  const [count, setCount] = useState(1);
  const [saves, setSave] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
    setCount(c => c + 1);
  };
  const addSave = () => {
    setSave(t => [...t, calculation]);
  };

  return (
    <View style={{backgroundColor: '#243763', height: '100%', width: '100%'}}>
      <View style={{backgroundColor: '#243763', margin: 20}}>
        <Text style={{...styles.text, fontSize: 20}}>
          Use Memo calculate factorial
        </Text>
        <Text style={styles.text}>Saves</Text>
        {saves.map((save, saveIndex) => {
          return (
            <Text key={saveIndex + 1} style={styles.text}>
              {saveIndex + 1}. {save}
            </Text>
          );
        })}
        <Pressable style={{...styles.button, width: '100%'}} onPress={addSave}>
          <Text style={styles.buttonText}> Add Saves </Text>
        </Pressable>

        <Pressable
          style={{...styles.button, width: '100%'}}
          onPress={increment}>
          <Text style={styles.buttonText}> Increment </Text>
        </Pressable>
        <Text style={{...styles.text, marginTop: 10}}>Count: {count}</Text>
        <Text style={{...styles.text, marginTop: 10}}>
          Calculated factorial: {calculation}{' '}
        </Text>
      </View>
    </View>
  );
};

const expensiveCalculation = num => {
  console.log('Calculating...');
  let factorial = 1;
  let calcPer = 0;
  let k = 0;
  for (let i = 0; i < 1000 * num * 1000; i++) {
    if (i == ((1000 * num * 1000) / 10) * k) {
      k++;
      calcPer += 10;
      console.log(calcPer, '%');
    }
  }
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: 351,
    height: 41,
    borderRadius: 14,
    backgroundColor: '#FF6E31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Kulim',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Kulim',
  },
});

export default Lab3;

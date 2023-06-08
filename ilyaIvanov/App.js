import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setValue(1);
          }}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setValue(2);
          }}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setValue(3);
          }}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setValue(4);
          }}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tab}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    margin: 10,
    flex: 1,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    backgroundColor: 'coral',
    margin: 10,
    height: 50,
    width: 350,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default App;

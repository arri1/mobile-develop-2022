import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
const Lab1Screen = ({navigation}) => {
  const [fontSize, setFontSize] = React.useState(24);
  return (
    <View style={styles.container}>
      <Text style={[styles.testText, {fontSize: fontSize}]}>BLAA</Text>
      <View style={styles.view}>
        <Button
          style={styles.button}
          title="+"
          onPress={() => { setFontSize(fontSize + 3)}}
        />
        <Button
          style={styles.button}
          title="-"
          onPress={() => { setFontSize(fontSize - 3)}}
        />
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    testText: {
      color: 'red',
      
    },
    view:{
      flexDirection: 'row',
    },
    button:{
      height: 100,
      color: "#fe4a49"
    }
  
  });
  
  export default Lab1Screen;
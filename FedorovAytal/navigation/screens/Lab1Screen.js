import React, {useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import {useSelector} from 'react-redux';

const Lab1Screen = ({navigation}) => {
  const [fontSize, setFontSize] = React.useState(24);
  const {lab1Color} = useSelector(state => state.colorReducer);

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: lab1Color}}>
      <View style={styles.buttonStyle}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    testText: {
      color: 'orange',
      
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
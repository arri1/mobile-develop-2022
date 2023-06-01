import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/bottom-tab';

function App() {
  return <SafeAreaProvider style={styles.container}>
    <NavigationContainer>
      <BottomTab>
      </BottomTab>
    </NavigationContainer>
  </SafeAreaProvider>
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})

export default App;
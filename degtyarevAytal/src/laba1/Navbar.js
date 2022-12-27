import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#7653A6',
    paddingBottom: 20,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});

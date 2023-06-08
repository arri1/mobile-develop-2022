import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View style={[styles.loading]}>
      <ActivityIndicator size="large" />
      <Text style={{marginTop: 15}}>Идет загрузка</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* eslint-disable prettier/prettier */
import React from 'react';
import {View,
        Button,
        StyleSheet,
        Text,
    } from 'react-native';

export const Lab4 = () => {
    const decrementCount = () => {
        let { count, actions } = this.props;
        count--;
        actions.changeCount(count);
    };
    const incrementCount = () => {
        let { count, actions } = this.props;
        count++;
        actions.changeCount(count);
    };
    const { count } = this.props;
    return (
        <View styles={styles.container}>
            <Button
            title="increment"
            onPress={() => incrementCount()}
            />
            <Text>{count}</Text>
            <Button
            title="decrement"
            onPress={() => decrementCount()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Lab4;

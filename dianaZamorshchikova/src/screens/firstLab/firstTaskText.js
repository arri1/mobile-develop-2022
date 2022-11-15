import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export const firstTaskText = () => {
    return (
        <SafeAreaView style={
            {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: getRandomColor()
            }
        }>
            <Text style={
                {
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: 'white',
                  }
            }>
                "Поэкспериментировать с хуком useState"
            </Text>
        </SafeAreaView>
    );
};

const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

import * as React from 'react';
import {View, Text} from 'react-native';

export default function Lab2Screen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('lab1')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Lab2 Screen</Text>
        </View>
    );
}
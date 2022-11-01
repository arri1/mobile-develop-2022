/* eslint-disable prettier/prettier */
import React, {useState, useMemo} from 'react';
import {Image,
        View,
        Button,
        StyleSheet,
        Text,
    } from 'react-native';

export const LabThree = () => {
    const timePeriods = [
        {name:'Morning',
        uri:'https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'},
        {name:'Day',
        uri:'https://steemitimages.com/p/2bP4pJr4wVimqCWjYimXJe2cnCgnHu155GjnhSsz16W?format=match&mode=fit&width=640'},
        {name:'Evening',
        uri:'https://images.unsplash.com/photo-1561915573-b78892da34b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
        {name:'Night',
        uri:'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    ];
    const [count, setCount] = useState(30);
    const calculation = useMemo(() => recursiveCalculation(count), [count]);
    const recursiveCalculation = (n) => {
        if (n === 1) {
            return 1;
        } else {
            return n * recursiveCalculation(n - 1);
        }
    };
    const [imageUri, setImageUri] = useState(timePeriods[0].uri);
    const buttonsMap = () => {
        return timePeriods.map((element) => {
            return (
                <View>
                    <Button
                        title={element.name}
                        onPress = {() => {
                            setImageUri(element.uri);
                        }}
                    />
                </View>
            );
        });
    };
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.buttonsBar}>
                {buttonsMap()}
            </View>
            <Image
                style = {styles.image}
                key = {Date.now()}
                source = {{uri: imageUri}}
            />
            <Text>{calculation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    buttonsBar: {
        marginTop: 40,
        flexDirection: 'row',
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
});

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
        'https://images.unsplash.com/photo-1595064085577-7c2ef98ec311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        'https://steemitimages.com/p/2bP4pJr4wVimqCWjYimXJe2cnCgnHu155GjnhSsz16W?format=match&mode=fit&width=640',
        'https://images.unsplash.com/photo-1561915573-b78892da34b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ];
    const [count, setCount] = useState(0);
    const [dayTime, setDayTime] = useState(0);
    const expensiveCalculation = (n) => {
        for (let i = 0; i < 100000000; i++) {
            n += 1;
        }
        return n;
    };
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const [imageUri, setImageUri] = useState(timePeriods[0]);
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.button}>
                <Button
                    title="Move 6 hours"
                    onPress = {() => {
                        if (dayTime === 0) {
                            setCount(count + 1);
                        }
                        setDayTime((dayTime + 1) % 4);
                        setImageUri(timePeriods[dayTime]);
                    }}
                />
            </View>
            <View style ={styles.clock}>
                <View style={styles.display}>
                    <Text>1</Text>
                </View>
            </View>
            <View style={styles.table} />
            <View style={styles.window}>
                <Image
                    style = {styles.image}
                    key = {Date.now()}
                    source = {{uri: imageUri}}
                />
                <View style={styles.frame} />
                <View style={[styles.frame, {left: 150}]} />
                <View style={[styles.frame, {top: 150}]} />
                <View style={[styles.frame, {top: 150, left: 150}]} />
            </View>
            <Text style={{top: 800}}>{calculation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        top: 400,
        left: 50,
    },
    mainContainer: {
        height: '100%',
        backgroundColor: '#7C7C7C',
    },
    window: {
        width: 300,
        height: 300,
        top: 30,
        left: 30,
    },
    frame: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderWidth: 10,
        borderColor: 'white',
    },
    clock: {
        position: 'absolute',
        top: 435,
        left: 10,
        width: 200,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    display: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: 170,
        height: 70,
        backgroundColor: '#404040',
    },
    table: {
        position: 'absolute',
        top: 535,
        width: '100%',
        height: 30,
        backgroundColor: '#694734',
    },
});

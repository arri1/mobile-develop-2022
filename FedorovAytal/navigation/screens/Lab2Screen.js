import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {setColor} from '../redux/actions';

const Lab2Screen = ({navigation}) => {
    const dispatch = useDispatch();
    useDispatch;
    const setColorDay = () => {
        dispatch(setColor('blue'));
    };
    const setColorNight = () => {
        dispatch(setColor('red'));
    };
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                  <View
                  
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text
                            style={{
                            marginTop: 20,
                            fontSize: 20,
                            color: 'black',
                        }}>
                        lab3
                        Изменение цвета 1 лабы</Text>
                    <TouchableOpacity style={styles.buttonBlue} onPress={setColorDay}>
                        <Text style={styles.buttonText}>Синий</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRed} onPress={setColorNight}>
                        <Text style={styles.buttonText}>Красный</Text>
                    </TouchableOpacity>
                    </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonRed: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 15,
    },
    buttonBlue: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 1,
        color: 'black',
    },
  });
  
export default Lab2Screen;
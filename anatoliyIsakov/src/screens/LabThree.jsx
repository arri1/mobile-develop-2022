import * as React from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const sum = (n) => {
    Alert.alert('Ошибка', 'Ошибка');
    return n + n
};

export const LabThree = () => {
    const [num, setNum] = React.useState(0);
    const [isGreen, setIsGreen] = React.useState(false);
    const result = React.useMemo(() => sum(num), [num]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: isGreen ? "green" : "red" },
                ]}
                onPress={() => setIsGreen(!isGreen)}
            >
                <Text style={styles.buttonText}>
                    {isGreen ? "green" : "red"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: "#009688" },
                ]}
                onPress={() => setNum(num + 1)}
            >
                <Text style={styles.buttonText}>
                    {result}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    button: {
        elevation: 8,
        borderRadius: 10,
        width: 170,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})
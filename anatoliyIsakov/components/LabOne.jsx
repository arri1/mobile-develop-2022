import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export function LabOne() {
    const [value, setValue] = React.useState(true);

    return (
        <View style={[
            styles.container,
            value === true && styles.row,
            value === false && styles.rowReverse,
        ]}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setValue(!value)}
            >
                <Text style={styles.buttonText}>
                    {test({ value })}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const test = ({ value }) => {
    if (value) {
        return 'row'
    } else {
        return 'rowReverse'
    }
}

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        width: 170,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    rowReverse: {
        flexDirection: 'row-reverse',
        flexWrap: "wrap",
    }
})
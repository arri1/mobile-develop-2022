import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function Lab3Screen({navigation}) {
    const [number, setNumber] = React.useState(1);
    const [inc, setInc] = React.useState(0);
    const factorial = React.useMemo(() => factorialOf(Number(number)), [number]);
    //const factorial = factorialOf(Number(number));
    const onClick = () => setInc(inc + 1);
  
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Factorial of</Text>
            <TextInput type="number" value={number} onChangeText={setNumber} />
            <Text>is {factorial}</Text>
            <TouchableOpacity onPress={onClick}><Text>Re-render</Text></TouchableOpacity>
            <Text>is {inc}</Text>
        </View>
        
    );
}

function factorialOf(n) {
    console.log('factorialOf('+n+') called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }
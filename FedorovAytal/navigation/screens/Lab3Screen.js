import * as React from 'react';
import {Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';


export default function Lab3Screen() {
	const [number, setNumber] = React.useState(1);
	const [number2, setNumber2] = React.useState(1);
	const [inc, setInc] = React.useState(0);
	const [isActive, setIsActive] = React.useState(true);
	const factorial = React.useMemo(() => factorialOf(Number(number)), [number]);

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Factorial of</Text>
            <TextInput type="number" value={number2} onChangeText={setNumber2} />
            <Text>is {isActive ? factorial : factorialOf(Number(number2))}</Text>
            <TouchableOpacity onPress={
				() => {
					setInc(prevState => prevState + 1)
					isActive ? setNumber(number2) : null;
				}
			}><Text>Re-render</Text></TouchableOpacity>
			<Switch
				onValueChange={() => {
					setIsActive(prevState => !prevState);
				}}
				value={isActive}
			/>
			
            <Text>is {inc}</Text>
        </View>
        
    );
}
const factorialOf = (n) => {
	console.log('factorialOf('+n+') called!')
	return n <= 0 ? 1 : n * factorialOf(n - 1);
}
  
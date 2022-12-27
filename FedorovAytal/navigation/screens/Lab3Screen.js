import React, {
	useState, 
	useMemo
} from 'react';
import { 
	Text,
	View, 
	TextInput, 
	TouchableOpacity, 
	Switch 
} from 'react-native';


const Lab3Screen = () => {
	const [text, setText] = useState('')

	const factorialOf = (n) => {
		setText(prevState => prevState + 'factorialOf('+n.toString()+') called!\n');
		return n <= 0 ? 1 : n * factorialOf(n - 1);
	}
	  
	const [number, setNumber] = useState(1);
	const [number2, setNumber2] = useState(1);
	const [ans, setAns] = useState(1);
	const [inc, setInc] = useState(0);
	const [isActive, setIsActive] = useState(true);

	const factorial = useMemo(() => factorialOf(Number(number)), [number]);

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Factorial of</Text>
            <TextInput type="number" value={number2} onChangeText={setNumber2} />
            <Text>is {isActive ? factorial : ans}</Text>
            <TouchableOpacity onPress={
				() => {
					setInc(prevState => prevState + 1)
					setNumber(number2)
					!isActive ? setAns(factorialOf(number2)) : null;
				}
			}><Text>Re-render</Text></TouchableOpacity>
			<Switch
				onValueChange={() => {
					setIsActive(prevState => !prevState);
					setNumber(1)
					setText('')
				}}
				value={isActive}
			/>
            <Text>is {inc}</Text>
            <Text>{text}</Text>
        </View>
	);
}

export default Lab3Screen;
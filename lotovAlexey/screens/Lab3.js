import React, {useState, useMemo} from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';

const Lab3 = () => {
  const [count, setCount] = useState(1);
  const [saves, setSave] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addSave = () => {
    setSave((t) => [...t, calculation]);
  };
  
  return (
    <View>
      <Text style={{fontWeight:'bold', fontSize: 30}}>Use Memo.</Text>
      <Text>Saves</Text>
      {saves.map((save, saveIndex)=>{
        return <Text key={saveIndex+1}>{saveIndex+1}) Result = {save}</Text>
      })}
      <Button 
        title='Add Saves'
        onPress={addSave}
      />
      <Text> Count: {count}</Text>
      <Button 
        title='Increment'
        onPress={increment}
      />
      <Text>Calculated factorial</Text>
      <Text>{calculation}</Text>
    </View>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  let factorial = 1
  let calcPer = 0
  let k = 0
  for(let i=0;i<1000*num*1000;i++)
  {
    if(i==1000*num*1000/10*k){
      k++
      calcPer+=10
      console.log(calcPer,"%")
    }
  }
  for(let i=1;i<=num;i++){
    factorial = factorial * i
  }
  return factorial;
};


export default Lab3;
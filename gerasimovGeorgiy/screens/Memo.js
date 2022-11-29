import {Text, View} from 'react-native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const options = {
  method: 'GET',
  params: {q: 'game of thr'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

const Memo = () => {
  const count = useSelector(state => state.test.value);
  useEffect(() => {
    // axios.get('https://imdb8.p.rapidapi.com/auto-complete',options).then(response=>{
    //   console.log(response);
    // })
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>{`counter: ${count}`}</Text>
    </View>
  );
};

export default Memo;

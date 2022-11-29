import {View, Text} from 'react-native';
import {createStore} from 'redux';

const Lab4 = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'lucida grande', fontWeight: 'bold'}}>
        HomeScreen
      </Text>
    </View>
  );
};

export default Lab4;

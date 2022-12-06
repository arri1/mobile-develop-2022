import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8CE585',
        justifyContent: 'center',
      }}>
      <Text style={{fontFamily: 'lucida grande', fontWeight: 'bold'}}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

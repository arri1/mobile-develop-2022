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
      <Text
        style={{
          fontFamily: 'lucida grande',
          color: '#FFFFFF',
          fontSize: 20,
        }}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

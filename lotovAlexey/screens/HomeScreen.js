import {View, Text, StyleSheet, Pressable} from 'react-native';

const HomeScreen = ({navigation}) => {
  const Logout = () => {
    navigation.navigate('Login');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#243763',
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
      <Pressable style={{...styles.button}} onPress={Logout}>
        <Text style={styles.buttonText}> Logout </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: 100,
    height: 41,
    borderRadius: 14,
    backgroundColor: '#FF6E31',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Kulim',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Kulim',
  },
});

export default HomeScreen;

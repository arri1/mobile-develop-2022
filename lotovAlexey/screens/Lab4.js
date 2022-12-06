import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSkyColor} from '../src/redux/actions';

const Lab4 = () => {
  const dispatch = useDispatch();
  useDispatch;
  const setColorNight = () => {
    dispatch(setSkyColor('#0A123D'));
  };
  const setColorDay = () => {
    dispatch(setSkyColor('#87CEEB'));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8CE585',
        justifyContent: 'flex-start',
      }}>
      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          color: '#FFFFFF',
          fontFamily: 'Kulim',
        }}>
        {' '}
        Set sky color on Lab1{' '}
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#8CE585',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.button} onPress={setColorDay}>
          <Text style={styles.buttonText}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={setColorNight}>
          <Text style={styles.buttonText}>Hight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 351,
    height: 50,
    backgroundColor: '#007EAF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: 'Kulim',
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Lab4;

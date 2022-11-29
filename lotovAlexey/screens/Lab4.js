import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSkyColor} from '../src/redux/actions';

const Lab4 = () => {
  const {skyColor} = useSelector(state => state.colorReducer);
  const dispatch = useDispatch();
  useDispatch;
  const setColorNight = () => {
    dispatch(setSkyColor('#666560'));
  };
  const setColorDay = () => {
    dispatch(setSkyColor('#87CEEB'));
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc',
        justifyContent: 'center',
      }}>
      <TouchableOpacity style={styles.button} onPress={setColorDay}>
        <Text>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={setColorNight}>
        <Text>Hight</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: 100,
    height: 50,
    backgroundColor: '#0080FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
    borderRadius: 15,
  },
});

export default Lab4;

import {useState} from 'react';
import {View, Button} from 'react-native';
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
      <Button title="Night" onPress={setColorNight} />
      <Button title="Day" onPress={setColorDay} />
    </View>
  );
};

export default Lab4;

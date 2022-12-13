import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const LabFour = () => {
  const value = useSelector(state => state.test.valueDirection);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{value}</Text>
    </View>
  );
};

export default LabFour;

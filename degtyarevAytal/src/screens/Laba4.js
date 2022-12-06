import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increaseBurgerAction, decreaseBurgerAction} from '../redux/index';

export const Laba4 = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 50}}>
        <Text> Number of burger  </Text>
        <Button title="Increase Burger" onPress={() => {}} />
      </View>
      <View style={{marginVertical: 50}}>
        <Button title="Decrease Burger" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Laba4;

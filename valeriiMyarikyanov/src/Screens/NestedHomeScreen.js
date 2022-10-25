import {Text, Button, View} from 'react-native';

export const NestedHomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Laboratory 1"
        onPress={() => navigation.navigate('Laboratory 1')}
      />
      <Button
        title="Laboratory 2"
        onPress={() => navigation.navigate('Laboratory 2')}
      />
    </View>
  );
};
